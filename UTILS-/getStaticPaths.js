/**
 * Checks for the number of slugs there will be based on the data : Transforming an array of objects into array of params
 * This will return an object that will have slug value. Returns the slug path.
 *
 * @format
 */

export function getStaticPaths() {
  const { data } = getAllCourses();
  return {
    paths: data.map((course) => ({
      params: {
        slug: course.slug,
      },
    })),
    fallback: false,
  };
}
