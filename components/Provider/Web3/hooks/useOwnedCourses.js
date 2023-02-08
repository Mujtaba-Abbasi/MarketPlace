/** @format */
import useSWR from "swr";
import { createCourseHash } from "utils/createCourseHash";
import { normalizeOwnedCourese } from "utils/normalize";

export const handler = (web3, contract) => (courses, account) => {
  const swrRes = useSWR(
    () => (web3 && contract && account ? `web3/ownedCourses/${account}` : null),
    async () => {
      const ownedCourses = [];
      for (let i = 0; i < courses.length; i++) {
        const course = courses[i];
        if (!course.id) {
          continue;
        }

        const courseHash = createCourseHash(web3)(course.id, account);

        try {
          const ownedCourse = await contract.methods
            .getCourseByHash(courseHash)
            .call();

          if (
            ownedCourse.owner !== "0x0000000000000000000000000000000000000000"
          ) {
            const normalized = normalizeOwnedCourese(web3)(course, ownedCourse);
            ownedCourses.push(normalized);
          }
        } catch (error) {
          console.log(error);
        }
      }
      console.log("These are ownedCourses", ownedCourses);
      return ownedCourses;
    }
  );

  console.log("This is SWRresponse", swrRes.data);
  return swrRes;
};

// const msg1abi = ethers.utils.solidityPack(
//   ["address", "string", "address", "string", "uint256"],
//   [address, "metaTransfer", realaccount, patientId, nonce]
// )

/*
    useEffect(() => {
    const fetchOwnedCourses = async () => {
      const ownedCourses = [];
      for (let i = 0; i < courses.length; i++) {
        const course = courses[i];
        if (!course.id) {
          continue;
        }

        const hexCourseId = web3.utils.utf8ToHex(course.id);
        const courseHash = web3.utils.soliditySha3(
          { type: "bytes16", value: hexCourseId },
          { type: "address", value: account }
        );

        const ownedCourse = await contract.methods
          .getCourseByHash(courseHash)
          .call();

        if (
          ownedCourse.owner === "0x0000000000000000000000000000000000000000"
        ) {
          return null;
        }

        const normalized = normalizeOwnedCourese(web3)(course, ownedCourse);
        ownedCourses.push(normalized);
      }
    };

    const ownedCourse = fetchOwnedCourses();
    debugger;
  }, []);

*/
