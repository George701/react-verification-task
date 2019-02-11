import React, { Component } from 'react';
import ScrollableAnchor,{ configureAnchors }  from 'react-scrollable-anchor';

class Jumbotron extends Component {
    render(){
        configureAnchors({offset: -60, scrollDuration: 200});

        return(
            <ScrollableAnchor id={'collection'}>
                <div className="jumbotron custom-jmb">
                    <h1 className="display-4">Lorem Ipsum</h1>
                    <p className="lead">Morbi nec efficitur magna. Ut pharetra non lectus non tristique. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec iaculis cursus arcu, ut efficitur sem. Mauris elementum faucibus elit id finibus. Ut et ipsum ex.</p>
                    <p>Praesent fringilla auctor enim a tempus. Morbi fringilla non arcu at convallis. Curabitur tincidunt nisl nec eleifend fermentum. Quisque condimentum rutrum nisi, ut laoreet lorem commodo vitae. Phasellus id elementum massa. Integer convallis sem turpis, eu imperdiet magna maximus eu.</p>
                    <p className="lead">
                        <a className="btn btn-light btn-lg" href="#0" role="button">More &#8628;</a>
                    </p>
                </div>
            </ScrollableAnchor>
        )
    }
}
export default Jumbotron;