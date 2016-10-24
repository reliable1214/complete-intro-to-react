// React = the way we wronte the component
// ReactDOM = the way you attach that to your device/window

// These two are functions
var div = React.DOM.div
var h1 = React.DOM.h1

// This is called a composite component
var MyTitle = React.createClass({
  // Define methods on the class
  // FYI you have no idea how many times its gonna
  // be called, so it needs to work in a vacum
  // FYI you can only ever return one element (it can have children though)
  render () {
    return (
      div(null,
        h1({style: {color: this.props.color}}, this.props.title)
      )
    )
  }
})

// Create a factory
var MyTitleFactory = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComponent = (
  div(null,
    // Here we are creating new instances of our component
    // All three approaches are the same
    React.createElement(MyTitle, {title: 'Properties are great!', color: 'rebeccapurple'}),
    MyTitleFactory({title: 'Use props everywhere!', color: 'mediumaquamarine'}),
    ce(MyTitle, {title: 'Props are the best!', color: 'peru'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
