import React, {useState} from 'react';

export default function Blog({posts, input}){
    //create a new array by filtering the original one
    console.log(posts);
    const filteredPosts = posts.filter((el) => {
      //if no input, return the original
      if (input === "") {
        console.log(el);
        return el;
      }
      else {
        var stringElement = JSON.stringify(el);
        console.log(stringElement)
        return stringElement.includes(input);
      }
    }

    )

    return (
        <div className="blogs">
            {filteredPosts.map((post) => {
                return(
                    <div className="blog reveal active">
                      <h3 className="post-title">{post.postTitle}</h3>
                      <div className="post-body">
                        {post.postLines.map((oneLine, id) => {
                              return(
                                oneLine.code === true ? (
                                  <pre key={id}>{oneLine.line}</pre> 
                                ) : (<p key={id}>{oneLine.line}</p>)  
                              )                            
                          }

                        )}
                      </div>
                      <div className="blog-post-footer">
                        <h5>#: {post.postTags}</h5>
                        <div className="theory"></div>
                      </div>
                    </div>
                )
            })}
              
              <div className="blog reveal active">
                <h3>4 Fourth Title</h3>
                <pre>Lorem, ipsum dolor.</pre>
                <div className="blog-post-footer">
                  <h5>#: switch, break, document.write()</h5>
                  <div className="theory"></div>
                </div>
              </div>

              <div className="blog reveal active">
                <h3>5 Fifth Title</h3>
                <pre>Lorem, ipsum dolor.</pre>
                <div className="blog-post-footer">
                  <h5>#: switch, break, document.write()</h5>
                  <div className="theory"></div>
                </div>
              </div>

              <div className="blog reveal active">
                <h3>5 Fifth Title</h3>
                <pre>Lorem, ipsum dolor.</pre>
                <div className="blog-post-footer">
                  <h5>#: switch, break, document.write()</h5>
                  <div className="theory"></div>
                </div>
              </div>

              <div className="blog reveal">
                <h3>5 Fifth Title</h3>
                <pre>Lorem, ipsum dolor.</pre>
                <div className="blog-post-footer">
                  <h5>#: switch, break, document.write()</h5>
                  <div className="theory"></div>
                </div>
              </div>

              <div className="blog reveal">
                <h3>5 Fifth Title</h3>
                <pre>Lorem, ipsum dolor.</pre>
                <div className="blog-post-footer">
                  <h5>#: switch, break, document.write()</h5>
                  <div className="theory"></div>
                </div>
              </div>
        </div>        
    )
}