import React from "react";
import { Link } from "react-router-dom";

import { Container, Divider, Button, Header } from "semantic-ui-react";

const Landing = () => (
  <Container fluid textAlign="center">
    <div>
      <img src=".../images/stock.jpg" alt="stock" />
    </div>
    <Divider />
    <Container text>
      <Header as="h2">About</Header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque
        pariatur odio dolor voluptatem minima quam dignissimos voluptas enim
        quas voluptatibus atque optio modi, quaerat deserunt repellendus iure.
        Sit neque veritatis necessitatibus corrupti eum distinctio quaerat
        incidunt iure. Consequatur itaque unde nulla saepe exercitationem ex,
        nemo accusamus esse, a porro amet quaerat? Quidem, natus totam velit
        dicta dolores sint consequuntur quod tenetur quae rem soluta quisquam
        molestias assumenda, rerum ipsam quia neque omnis repudiandae libero
        illo sit, saepe eius deleniti similique. Maiores deleniti omnis
        molestias tenetur inventore, sit enim minima aspernatur doloribus
        tempore quos molestiae distinctio sint! Quae, reiciendis saepe!
      </p>
      <Link to="/dashboard">
        <Button secondary>Demo now!</Button>
      </Link>
    </Container>
    {/* Add demo/way for users to see how the app functions */}
  </Container>
);

export default Landing;
