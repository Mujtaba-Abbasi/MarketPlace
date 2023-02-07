/** @format */

export const CourseStates = {
  0: "purchased",
  1: "activated",
  2: "deactivated",
};

export const normalizeOwnedCourese = (web3) => (course, ownedCourse) => {
  return {
    ...course,
    ownedCourseId: ownedCourse.id,
    proof: ownedCourse.proof,
    owned: ownedCourse.owner,
    price: web3.utils.fromWei(ownedCourse.price),
    state: CourseStates[ownedCourse.state],
  };
};
