import React, { Component } from 'react';


class Article extends Component {
    render() {
        return (
            <article className="article-container">
                <h2 className="category-header">Lacinia nisi</h2>
                <div className="article-header">
                    <img src="https://images.pexels.com/photos/1420709/pexels-photo-1420709.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="avatar example"/>
                    <div>Nam luctus consequat ipsum, a egestas tortor mattis at. Phasellus eget sodales ligula, vel suscipit eros. Mauris convallis sapien sit amet nisl faucibus, sit amet fringilla ante fermentum. Curabitur quis dui eleifend, tempus magna et, ornare diam. Morbi nec efficitur magna. Ut pharetra non lectus non tristique. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec iaculis cursus arcu, ut efficitur sem. Mauris elementum faucibus elit id finibus. Ut et ipsum ex.</div>
                </div>
                <div className="article-body">
                    Quisque egestas faucibus auctor. Donec scelerisque et tellus ac bibendum. Donec ligula eros, facilisis a dignissim ac, sagittis ut dui. Ut egestas, lacus eu suscipit laoreet, velit enim blandit elit, ut convallis magna felis nec augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam faucibus eros sit amet fringilla tempor. Cras et tellus ut lorem consectetur eleifend sed at erat. Etiam volutpat bibendum lacus, vel sodales elit. Cras ultricies ex at lobortis rhoncus. Sed maximus felis sit amet nulla pulvinar ullamcorper. In leo nibh, placerat ut lobortis a, imperdiet a nunc. Nam luctus, quam sed viverra gravida, ante augue mattis ligula, ac aliquet augue nisi a ligula. Quisque eget dolor nec diam gravida cursus et sit amet velit. Nulla sed cursus risus, vitae dictum nibh. Cras mollis nisi in purus pellentesque elementum.
                </div>
                <div className="article-footer">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper nibh auctor nisl rutrum pellentesque. Suspendisse ultricies nisl neque, vehicula dictum purus imperdiet sed. Cras lacinia orci scelerisque, luctus urna nec, laoreet nunc. Suspendisse laoreet, odio eu lacinia faucibus, augue orci dapibus quam, ut consectetur turpis ipsum sagittis mauris. Morbi viverra elementum maximus. Sed ornare tellus risus, sit amet pellentesque enim dapibus sit amet. Vivamus a efficitur orci. Maecenas molestie ac nunc sit amet laoreet. Curabitur dapibus a lorem non auctor. Aliquam semper at velit et interdum. Suspendisse potenti. Pellentesque at magna non nisi elementum ultricies.
                </div>
            </article>
        );
    }
}

export default Article;