/** @format */

import { HeroCourse, KeyPoints, Curriculum, Modal } from "@/components/Course";
import { BaseLayout } from "@/components/Layout";

export default function Course() {
  return (
    <BaseLayout>
      <div className="py-4">
        <HeroCourse />
        <KeyPoints />
        <Curriculum />
        <Modal />
      </div>
    </BaseLayout>
  );
}
