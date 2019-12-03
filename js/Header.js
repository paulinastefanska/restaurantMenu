const Header = props => {
  const activeItems = props.items.filter(item => item.active);
  const number = activeItems.length;
  return (
    <header>
      <h2>Orders qty: {number}</h2>
      <h2>
        To pay: {number ? `$${number * 10}` : "you did not order anything"}
      </h2>
    </header>
  );
};
