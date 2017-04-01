# Statement Bugs - Evil Eval Bug

safe.open("_;console.log(JSON.stringify(combinations));","999");

{"main":"12345","fire":"67890"}

incorrect combination

safe.open("main='999';", "999");
safe opened