var title = {"content" : "Bryce's Blog - all about Python, Neat Things and Family",
             "target_id": "Title"}
//update post links here
var posts = [
    {"post_title": "Our First Robot",
     "post_date": "07/12/2017",
     "link": "our_first_robot.html",
     "topic_id": "Family"},

    {"post_title": "Bunk Bed Build",
     "post_date": "07/18/2017",
     "link": "bunk_bed_build.html",
     "topic_id": "Projects"},

    {"post_title": "My Python Story",
     "post_date": "07/19/2017",
     "link": "my_python_story.html",
     "topic_id": "Code"}
]

function InsertNavShell() {
    
    var nav_shell = `
        <h3>Topics</h3>
        <ul>
            <li>
                <a class="pill pill-button" href="index.html">Welcome</a>
            </li>
            <li>
                <div class="pill">Family</div>
                <ul id="Family">
                </ul>
            </li>
            <li>
                <div class="pill">Code</div>
                <ul id="Code">
                </ul>
            </li>
            <li>
                <div class="pill">Projects</div>
                <ul id="Projects">
                </ul>
            </li>
        </ul>`;
    document.getElementById('Nav').innerHTML = nav_shell
}

function MakePostNavPill(post_data) {
    var nav_entry = `<li>
                        <a class="pill sub-pill pill-button" href="${post_data.link}">${post_data.post_title} - ${post_data.post_date}</a>
                    </li>`;
    return nav_entry
}

function InsertPosts(post_list) {
    /* The Goal of this function is to load all the links to various 
    posts in the nav section of each page so I don't have to copy/paste
    the nav for every post and update all the post pages every time
    i add a new one.

    Parameters
    ----------
    post_list : Array
      an array of post_data objects containing attributes for 
      inserting into each li element

    */

    for (post_index in post_list) {
        // This is crazy, python's (for x in list) returns the actual item 
        // as the temporary variable not the index
        // what's the point of even having "for in" this is just silly!
        var post_data = post_list[post_index];
        var post_li = MakePostNavPill(post_data); 

        // the following 3 lines come from Stack Overflow post https://stackoverflow.com/a/35385518/4772088
        // this is to add html to a page without something called jquery I guess?
        var template_el = document.createElement('template');
        template_el.innerHTML = post_li;
        var post_li_node = template_el.content.firstChild;

        console.log(post_li);
        console.log(post_data);
        var ul_el = document.getElementById(post_data.topic_id);
        console.log(ul_el);
        ul_el.appendChild(post_li_node);
    }

}

InsertNavShell();
console.log(posts);
InsertPosts(posts)
