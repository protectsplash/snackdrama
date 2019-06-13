const { getUserId } = require('../../utils')

const Drama = {
  async createDrama(parent, { 
    title,
    text,
    gooddrama,
    poster,
    day,
    about,
    youtube,
    fulllink,
    studio,
    name,
    link,
    cut,
    type
  }, ctx, info) {
    // const userId = getUserId(ctx)
    return ctx.db.mutation.createDrama(
      {
        data: {
          title,
          text,
          gooddrama,
          poster,
          day,
          about,
          youtube,
          fulllink,
          studio,
          name,
          link,
          cut,
          type
        },
      },
      info
    )
  },

  // async publish(parent, { id }, ctx, info) {
  //   const userId = getUserId(ctx)
  //   const postExists = await ctx.db.exists.Post({
  //     id,
  //     author: { id: userId },
  //   })
  //   if (!postExists) {
  //     throw new Error(`Post not found or you're not the author`)
  //   }

  //   return ctx.db.mutation.updatePost(
  //     {
  //       where: { id },
  //       data: { isPublished: true },
  //     },
  //     info,
  //   )
  // },

  // async deletePost(parent, { id }, ctx, info) {
  //   const userId = getUserId(ctx)
  //   const postExists = await ctx.db.exists.Post({
  //     id,
  //     author: { id: userId },
  //   })
  //   if (!postExists) {
  //     throw new Error(`Post not found or you're not the author`)
  //   }

  //   return ctx.db.mutation.deletePost({ where: { id } })
  // },
}

module.exports = { Drama }
