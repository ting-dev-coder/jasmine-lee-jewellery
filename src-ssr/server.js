/**
 * The "listenResult" param for the "close()" definition below
 * is what you return here.
 *
 * For production, you can instead export your
 * handler for serverless use or whatever else fits your needs.
 */

export const create = () => {}

export const renderPreloadTag = () => {}

export const serveStaticContent = () => {}

export async function listen({ app, port, isReady, ssrHandler }) {
  if (process.env.DEV) {
    await isReady()
    return await app.listen(port, () => {
      if (process.env.PROD) {
        console.log('Server listening at port ' + port)
      }
    })
  } else {
    // in production
    // "ssrHandler" is a prebuilt handler which already
    // waits for all the middlewares to run before serving clients

    // whatever you return here is equivalent to module.exports.<key> = <value>
    return { handler: ssrHandler }
  }
}
