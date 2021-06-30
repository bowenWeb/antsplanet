export const state = () => ({
  connected: true
})

export const mutations = {
  switch (state, flag) {
    state.connected = flag
  }
}
