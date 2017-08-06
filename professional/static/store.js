document.addEventListener("DOMContentLoaded", function(event) { 

    var store_db = [
        {
            "sn_id": "12345",
            "item_name": "Beachy Keen Shawl",
            "yarn": "100% acrylic Stitch Studio by Nicole",
            "craft": "Crochet",
            "price": 40.00
        },
        {
            "sn_id": "23456",
            "item_name": "Half Moon Knitted Shawl",
            "yarn": "Yarn Co. 100% silk",
            "craft": "Crochet",
            "price": 60.00
        }
    ]

    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    console.log("store ready")
});
