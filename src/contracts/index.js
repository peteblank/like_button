  import { createContract } from '@stakeordie/griptape-vue.js'
  import { counterDefinition } from './counterDef.js'

  const contractAddress = 'secret1w97ynhe099cs5p433dvlaqhsxrszudz2n3f56h'

  export const useCounterStore = createContract('counter', contractAddress, counterDefinition)