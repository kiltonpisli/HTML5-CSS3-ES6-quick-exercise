Here is the exercise:
## HTML5/CSS3/ES6 quick exercise

Using this html:
    <ul id="card-trigger">
        <li><a href="void(0)" data-sku="7">post 7</a></li>
        <li><a href="void(0)" data-sku="3">post 3</a></li>
        <li><a href="void(0)" data-sku="2">post 2</a></li>
    </ul>
    <a href="void(0)" id="remover">remove cards</a>
    <div id="cards-holder"></div>


Your objective:
1. Clicking a list item a Card will be generated in cards-holder div. If that card is yet in the stage it will not added another time.
2. The card content will be passsed through this service: https://jsonplaceholder.typicode.com/posts/{id}, using data-sku attribute as a parameter.
3. Every single card will have a close button for that single card.
4. The card-trigger in mobile devices will become an icon exposing menu items.

Note:
A. You can change (if you think it's better) the html.
B. We don't attach a visual for this component, do what you want/like visually, for the structure and for the general styling. Try to do something lovable.
