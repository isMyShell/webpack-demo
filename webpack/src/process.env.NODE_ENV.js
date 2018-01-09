
const env = process.env.NODE_ENV
const envFn = env => {
  console.log(`%cLooks like we are in ${env} mode !`, 'color:#f60', )
}
envFn(env)