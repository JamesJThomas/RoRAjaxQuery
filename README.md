# AjaxQuery
## Usage

See also AjaxQuery.html

### In the head element

1. You need jQuery, so something along the lines of `<script src="jquery-3.5.1.min.js"></script>`

1. Set up the variables to communicate with the script.

    ```
    <script>
    var AjaxQueryURL = "http://localhost:3000/books/search.json?query=";
    var AjaxResultsId = "results";
    var AjaxQueryResults = "name";
    var AjaxQueryId = "query";
    var AjaxPrefix = "";
    var AjaxSuffix = "\n";
    </script>
    ```

    * `AjaxQueryURL` is where the query URL is; you'll have to change
    this to reflect where it is in your application.
    * `AjaxResultsId` is the element id where the results will be
    placed. This can be a list, a textbox, etc.
    * `AjaxPrefix` and `AjaxSuffix` are what are placed before and after
    the results in the `AjaxResultsId`. The above works for a textbox,
    for a list the `AjaxPrefix` could be "&lt;li&gt;" and the `AjaxSuffix`
    could be "&lt;/li&gt;".
    * `AjaxQueryResults` is the name of the field in the returned JSON to be
    displayed.
    * `AjaxQueryId` is the id of the element that holds the query
    string.

1. Include the script itself.

    ```
    <script type="text/javascript" src="AJAXQuery.js"></script>
    ```

### In the body element

1. Have an input somewhere the corresponds with `AjaxQueryTag`

    ```
    <input type="text" id="query" />
    ```

1. Create a div to hold the query results, e.g.:

    ```
    <div id="results"></div>
    ```

1. Enjoy.

## Rails Usage

1. In the `public/javascripts` directory add the AJAXQuery.js file.

1. Include the script itself.

    ```
    <script type="text/javascript" src="/javascripts/AJAXQuery.js"></script>
    ```

1. Add `gem 'jquery-rails'` to the Gemfile.

1. Add `//= require jquery` to `app/assets/javascripts/application.js`
after `//= require turbolinks` and before `//= require\_tree .`

1. Set up the variables to communicate as above.

1. Add a form similar to this.

    ```
    <%= form_tag(search_books_url, method: "get") do %>
        <%= label_tag(:query, "Search for:") %>
        <%= text_field_tag(:query) %>
        <%= submit_tag("Search") %>
    <% end %>
    ```

1. Create a div to hold the query results as above.

1. Enjoy.

