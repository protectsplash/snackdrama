const { getUserId } = require('../utils')

const Query = {
  Drama(parent, { id }, ctx, info) {
    return ctx.db.query.Drama({ where: { id } }, info)
  },
  Dramas(parent, { id }, ctx, info) {
    return ctx.db.query.Dramas({ where: { id } }, info)
  },
  DramasType(parent, { type }, ctx, info) {
    return ctx.db.query.Dramas({ where: { type } }, info)
  },
  thank(parent, { id }, ctx, info) {
    return ctx.db.query.thank({ where: { id } }, info)
  },
  thanks(parent, { id }, ctx, info) {
    return ctx.db.query.thanks({ where: { id } }, info)
  },
  me(parent, args, ctx, info) {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  },
}

module.exports = { Query }
