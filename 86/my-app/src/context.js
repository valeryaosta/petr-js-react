import React from "react";

const dataContext = React.createContext({
    mail: "name@example.com",
    text: 'some text',
    forceChangeMail: () => {}
})

export default dataContext