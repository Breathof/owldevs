import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-web-dev',
  templateUrl: './web-dev.component.html',
  styleUrls: ['./web-dev.component.css']
})
export class WebDevComponent implements OnInit {

  posts: Array<Post> = new Array<Post>();

  constructor() { }

  ngOnInit() {
    this.posts = [
      {
        visible: false,
        imageSource: "./assets/Images/polyfils.jpg",
        rawHtml: `          
        <h3>Polyfill</h3>
        <h6 class="black">A polyfill is a browser fallback, made in JavaScript,
        that allows functionality you expect to work in modern browsers to work
        in older browsers, e.g., to support canvas (an HTML5 feature) in older browsers.
        </h6>
        <h6 class="black">
        An example is sessionStorage is available in all the latest browsers (IE8 and upwards) but isn't in IE7 and
        below.
        A polyfill can be used to plug the support for older browsers that don't provide sessionStorage.
        </h6>
        <p></p>
        `
      }
    ]
  }

  showContent(post: Post) {
    console.log("object");
    post.visible = true;
  }

  navigateBack(){
    console.log("object");

    this.posts.forEach(post => {
      post.visible = false;
    });
  }
  

}
