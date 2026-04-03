import { getCollection } from "astro:content";

export const getPosts = async () => {
  const posts = await getCollection("posts", ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  });

  return posts.sort((a, b) => {
    const aDate = new Date(a.data.createdAt).getTime();
    const bDate = new Date(b.data.createdAt).getTime();
    return bDate - aDate;
  });
};

export const getProjects = async () => {
  const projects = await getCollection("projects");

  const statusOrder = {
    "in-progress": 0,
    planning: 1,
    completed: 2,
    archived: 3,
  };

  // console.log(projects)
  return projects.sort((a, b) => {
    const statusDiff =
      (statusOrder[a.data.status] ?? 4) - (statusOrder[b.data.status] ?? 4);
    if (statusDiff !== 0) return statusDiff;
    return 0;
  });
};

export const getRecentPosts = async (num: number) => {
  return (await getPosts()).slice(0, num);
};
