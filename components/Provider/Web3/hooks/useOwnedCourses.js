/** @format */
import useSWR from "swr";
import { normalizeOwnedCourese } from "utils/normalize";

export const handler = (web3, contract) => (courses, account) => {
  const swrRes = useSWR(
    () => (web3 && contract && account ? "web3/ownedCourses" : null),
    async () => {
      const ownedCourses = [];
      for (let i = 0; i < courses.length; i++) {
        const course = courses[i];
        // if (!course.id) {
        //   continue;
        // }

        const hexCourseId = web3.utils.utf8ToHex(course.id);

        const courseHash = web3.utils.soliditySha3(
          { type: "bytes16", value: hexCourseId },
          { type: "address", value: account }
        );

        console.log("Before course call");
        debugger;
        const ownedCourse = await contract.methods
          .getCourseByHash(courseHash)
          .call();

        console.log("After course call");
        console.log("Owned Courses", ownedCourse);

        if (
          ownedCourse.owner === "0x0000000000000000000000000000000000000000"
        ) {
          return null;
        }

        const normalized = normalizeOwnedCourese(web3)(course, ownedCourse);
        ownedCourses.push(normalized);
        console.log("This is Normalized", normalized);

        debugger;
      }
      return ownedCourses;
    }
  );
  return swrRes;
};

// const msg1abi = ethers.utils.solidityPack(
//   ["address", "string", "address", "string", "uint256"],
//   [address, "metaTransfer", realaccount, patientId, nonce]
// )
