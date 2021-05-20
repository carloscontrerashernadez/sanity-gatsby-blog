/*Use this for newer act-on forms that use JS*/





import React from "react"

function newScript(id){
  var text =
  ` ! function(o, t, e, a) {
            o._aoForms = o._aoForms || [], o._aoForms.push(a);
            var n = function() {
              var o = t.createElement(e);
              true ? typeof(_aoFormLoader) != "undefined" ? _aoFormLoader.load({
                id: "` +
        id +
        `:d-0001",
                accountId: "36273",
                domain: "marketing.circadence.com",
                isTemp: false,
                noStyle: false,
                prefill: false
              }) : "" : n.insertBefore(o, a)
            };
            window.attachEvent ? window.attachEvent("onload", n) : window.addEventListener("load", n, !1), n()
          }(window, document, "script", {
            id: "` +
        id +
        `",
            accountId: "36273",
            domain: "marketing.circadence.com",
            isTemp: false,
            noStyle: false,
            prefill: false
          });
          `
  return text
}

export default class ActOnNew extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: false,
      formID: this.props.id,
    }
  }

  componentDidMount () {
    try {
      const head = document.querySelector("head")
      const remoteScript = document.createElement("script")

      remoteScript.setAttribute(
        "src",
        "https://marketing.circadence.com/acton/content/form_embed.js"
      )

      remoteScript.onload = function () {

        this.setState({
          loaded: true
        }, () => {

          const script = document.createElement("script");
          script.id="aoform-script-"+this.props.id+":d-0001"
          script.text = newScript(this.props.id);
          script.async = true;
          const wrapper = document.getElementById("act-on-form-wrapper"+this.props.id);
          wrapper.appendChild(script);

        })

      }.bind(this)

      head.appendChild(remoteScript)

    } catch {

    }


   
}

  render() {
    return (
      <div>
        {(!this.state.loaded ? <div id="form-loading-wheel" class="lds-dual-ring">Loading form...</div> : <div/>)}
        <div id={"act-on-form-wrapper"+this.props.id}></div>
      </div>
    )
  }
}





 