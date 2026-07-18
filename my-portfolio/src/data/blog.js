const postFiles = import.meta.glob('../content/blog/*.json', { eager: true })

export const blogPosts = Object.values(postFiles)
  .map((module) => module.default)
  .sort((a, b) => new Date(b.date) - new Date(a.date))
