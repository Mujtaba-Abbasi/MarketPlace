/** @format */
import { Card, List } from "@components/UI/Course";
import { BaseLayout } from "@components/UI/Layout";
import { getAllCourses } from "@content/courses/fetcher";
import { Button } from "@components/UI/Common";
import OrderModal from "@components/UI/Course/OrderModel";
import { useState } from "react";
import { useWalletInfo } from "@components/hooks/web3";
import { Header } from "@components/UI/Marketplace";
import { useWeb3 } from "@components/Provider";

export default function Martketplace({ courses }) {
  const { web3, contract } = useWeb3();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const { canPurchaseCourse, account } = useWalletInfo();

  /*
   * In order to purchase a course, You need to provide the courseId and the proof which is unique to every user.
   * hexCourseId will be passed to the Contract function and the proof will be generated using the email and the orderHash
   * orderHash is generated using the hexCourseId and the account address of the user.
   * The price will be also bec converted to wei to send to the smart contact.
   * A user can't purchase the same course twice.
   */

  const purchaseCourse = async (order) => {
    const hexCourseId = web3.utils.utf8ToHex(selectedCourse.id);

    const orderHash = web3.utils.soliditySha3(
      { type: "bytes16", value: hexCourseId },
      { type: "address", value: account }
    );

    const emailHash = web3.utils.sha3(order.email);
    const proof = web3.utils.soliditySha3(
      { type: "bytes32", value: emailHash },
      { type: "bytes32", value: orderHash }
    );
    const val = web3.utils.toWei(String(order.price));

    try {
      const res = await contract.methods
        .purchaseCourse(hexCourseId, proof)
        .send({ from: account, value: val });
    } catch (error) {
      console.log("Purchased Failed!");
    }
  };

  return (
    <BaseLayout>
      <Header />
      <List courses={courses}>
        {(course) => (
          <Card
            course={course}
            key={course.id}
            disabled={!canPurchaseCourse}
            Footer={() => (
              <div className="mt-3">
                <Button
                  disabled={!canPurchaseCourse}
                  onClick={() => setSelectedCourse(course)}
                  variant="lightBlue"
                >
                  Purchase
                </Button>
              </div>
            )}
          />
        )}
      </List>
      {selectedCourse && (
        <OrderModal
          onSubmit={purchaseCourse}
          course={selectedCourse}
          close={() => setSelectedCourse(null)}
        />
      )}
    </BaseLayout>
  );
}

export function getStaticProps() {
  const { data } = getAllCourses();
  return {
    props: { courses: data },
  };
}
