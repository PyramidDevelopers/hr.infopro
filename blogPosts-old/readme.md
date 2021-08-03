# How to make a blog page

Steps:

1. Copy `blogtemplate.html` and paste it in a new page called `blogpageX.html` in the blogPosts folder
2. Store all images of the blog in the `blogImages` folder
3. Replace/edit in the required places inside the template portion of this document.
    * Use `<h1>` tag for main blog title .
    * Use `<h2>` for sub-headings.
    * Use `<p>` tag to put text in a different paragraph.
    * Use `<img?` tag to add images, link of image in src attribute.
    * Add required footnotes in `<h4>` tag inside footnotes div.
4. Copy the below code and paste in `blogs.html` under the `Paste here` comment and replace text in square brackets

 ``` 
        <div class="blog-item-container">
                <a href="blogPosts/[blogpageX].html">
                    <div class="blog-item-image">
                        <img src="blogPosts/blogImages/[blog1_1.png]" alt="">
                    </div>
                    <div class="blog-item-title">
                        <h3>
                            <div class="blog-item-text">[Blog title]</div>
                            <div class="blog-item-arrow"> &#x2192 </div>
                        </h3>
                    </div>
                </a>
        </div>
                    <!-- Paste here -->
```
5. Check if all blog links work on `blogs.html`
6. Push to github


       