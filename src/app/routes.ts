const loginPath = 'https://dummyjson.com/auth/login';
const postsPath = 'https://jsonplaceholder.typicode.com/posts';

export const apiRoutes = {
  login: () => loginPath,
  posts: () => postsPath,
  post: (id: number) => [postsPath, id].join('/'),
};
