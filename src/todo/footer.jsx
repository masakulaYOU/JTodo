import '../style/footer.less'

export default {
  data() {
    return {
      author: 'Pancake Lee'
    }
  },
  render() {
    return (
      <div id="footer">
        <span>Written by {this.author}</span>
      </div>
    )
  }
}