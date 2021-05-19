import React from "react";

GlobalContext = React.createContext({});

export class GlobalContextProvider extends React.Component {
    state = {
        selected: [],
        // isMenuOpen: false
    }

    // switchToOpen = () => {
    //     this.setState({ isMenuOpen: true });
    // }

    // switchToClose = () => {
    //     this.setState({ isMenuOpen: false });
    // }

    render() {
        return (
            <GlobalContext.Provider
                value={{
                    ...this.state,
                    // switchToOpen: this.switchToOpen,
                    // switchToClose: this.switchToClose
                }}
            >
                {this.props.children}
            </GlobalContext.Provider>
        )
    }
}

// create the consumer as higher order component
export const withGlobalContext = ChildComponent => props => (
    <GlobalContext.Consumer>
        {
            context => <ChildComponent {...props} global={context} />
        }
    </GlobalContext.Consumer>
);