document.addEventListener("DOMContentLoaded", function(event) { 

    var store_db = {
        "12345": {
            "item_name": "Beachy Keen Shawl",
            "yarn": "100% acrylic Stitch Studio by Nicole",
            "craft": "Crochet",
            "item_price": 40.00
        },
        "23456": {
            "item_name": "Half Moon Knitted Shawl",
            "yarn": "Yarn Co. 100% silk",
            "craft": "Crochet",
            "item_price": 60.00
        }
    }

    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    // var btn = document.getElementById("purchase_btn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal 
    //btn.onclick = function() {
    //    modal.style.display = "block";
    //}

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
    console.log("store ready");

    function purchaseBtnClicked(event) {
        console.log(this);
        var el = this;
        console.log(el.dataset);
        var sn = el.dataset.sn;
        item_data = store_db[sn];

        // following code fills out order summary table
        item_name_el = document.getElementById("item_name");
        item_name_el.value = item_data["item_name"];

        item_sn_el = document.getElementById("item_sn");
        item_sn_el.value = sn;

        item_order_date_el = document.getElementById("order_date");
        date_time = new Date();
        date_time_str = date_time.toLocaleString();
        console.log(date_time_str);
        //closer to how to deal with strings in python :)
        date_split = date_time_str.split(",");
        date_str = date_split[0];
        item_order_date_el.value = date_str;

        item_price_el = document.getElementById("item_price");
        item_price_el.value = item_data["item_price"];
        modal.style.display = "block";

    };

    var purchase_btns = document.getElementsByClassName("purchase_btn");

    for (var i=0; i < purchase_btns.length; i++) {
        purchase_btns[i].addEventListener("click", purchaseBtnClicked); 
    }

    // specific function to validate credit card input
    function validateCreditCard(event) {
        var el = this;
        cc_number = this.value;
        if (el.value.length === 16) {
            for (var i=0; i < el.value.length; i++) {
                var result = parseInt(cc_number[i]);
                if (isNaN(result)) {
                    el.value='';
                    window.alert("error: character at position " + i+1 + " in card number was not an integer.");
                    return

                }
            }
        } else {
            el.value = '';
            window.alert("A full credit card number must be entered");
            return
        }
    }

    document.getElementById("card-no").addEventListener("blur", validateCreditCard);

    function validateForm(event) {
        var all_inputs = document.forms["checkout_form"].getElementsByTagName("input");
        console.log(all_inputs);
        var bad_inputs = [];
        for (i in all_inputs) {
            el = all_inputs[i];
            input_value = el.value;
            console.log(el)
            // get only text inputs or length check won't work
            if (el.type === "text") {
                if (input_value.length < 1) {
                    el.style = "background-color: lightcoral";
                    bad_inputs.push(el);
                }
            }

        }

        if (bad_inputs.length > 0) {
            window.alert("There are missing fields, all fields required!");
            return false;
        }
    }

    document.getElementById("checkout_form").onsubmit = validateForm;
});
