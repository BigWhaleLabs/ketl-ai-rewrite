import 'module-alias/register'

import runApp from '@/helpers/runApp'

void (async () => {
  console.log('Starting the app')
  await runApp()
})()
