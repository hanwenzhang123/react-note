Diving Deeper: working with Fragments, Portals, Refs
JSX Limitation & Fragments
Getting a cleaner DOM with Portals
Working with Refs

JSX Limitations
- you can not return more than one root JSX element 
  you also can not store morethan one "root" JSX element in a variable
  
- solution 
//1 - a wrapping <div> (no needs to be div, can be any element, but only 1 root)
  return (
    <div>
      {error && (     //{} for dynamic javascript expression
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );

//2 - an array, but would get a warinng due to JSX needs unique id key
  return (
    [
      error && (
        <ErrorModal
          key="error-modal"     //add a key here
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )
      <Card key="add-user-card" className={classes.input}>  //add a key here
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    ]
  );

//when we use div, a new problem:
//"<div> Soup"
<div>
  <div>
    <div>
      <div>
        <h1>Hello World</h1>
      </div>
    </div>
  </div>
</div>
 
