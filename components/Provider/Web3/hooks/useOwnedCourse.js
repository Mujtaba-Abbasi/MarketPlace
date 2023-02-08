/** @format */
import useSWR from "swr";
import { createCourseHash } from "utils/createCourseHash";
import { normalizeOwnedCourese } from "utils/normalize";

export const handler = (web3, contract) => (course, account) => {
  const swrRes = useSWR(
    () => (web3 && contract && account ? `web3/ownedCourse/${account}` : null),
    async () => {
      const courseHash = createCourseHash(web3)(course.id, account);
      let ownedCourse;
      try {
        ownedCourse = await contract.methods.getCourseByHash(courseHash).call();

        if (
          ownedCourse.owner !== "0x0000000000000000000000000000000000000000"
        ) {
          ownedCourse = normalizeOwnedCourese(web3)(course, ownedCourse);
        }
      } catch (error) {
        console.log(error);
      }
      return ownedCourse;
    }
  );

  return swrRes;
};
