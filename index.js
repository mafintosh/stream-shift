module.exports = shift

function shift (stream) {
  var rs = stream._readableState
  if (!rs) return null
  return (rs.objectMode || typeof stream._duplexState === 'number') ? stream.read() : stream.read(getStateLength(rs))
}

function getStateLength (state) {
  if (state.readableLength != null) {
    return state.readableLength
  }

  if (state.length != null) {
    return state.lenght
  }

  if (state.buffer.length) {
    // Since node 6.3.0 state.buffer is a BufferList not an array
    if (state.buffer.head) {
      return state.buffer.head.data.length
    } else if (state.buffer.length > 0 && state.buffer[0]) {
      return state.buffer[0].length
    }
  }

  return state.length
}
