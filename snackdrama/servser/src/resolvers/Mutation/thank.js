const { getUserId } = require('../../utils')

const thank = {
  async createDrama(parent, { 
    webname,
     weburl,
     webemail,
  }, ctx, info) {
    // const userId = getUserId(ctx)
    return ctx.db.mutation.createDrama(
      {
        data: {
          webname,
          weburl,
          webemail,
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

module.exports = { thank }
