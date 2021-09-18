export const counterDefinition = {
  state: {
    count: undefined
  },
  queries: {
    async getCount() {
      const msg = {'get_count':{}}
      const res = await this.scrtClient.queryContract(this.contractAddress, msg)
      this.count = res.count
    }
  },
  messages: {
    async increment() {
      let success = true;
      const msg = {'increment':{}}
      const res = await this.scrtClient.executeContract(this.contractAddress, msg)
      //this.count = res.count
      this.count++
    } 
  }
}