import { Container } from "@material-ui/core";
import React, { Component } from "react";
import MaterialTable from 'material-table;
class Users extends Component {
  render() {
    return (
      <div>
        <Container maxWidth="md" fixed>
          <MaterialTable
            title="Editable Example"
            columns={state.columns}
            data={state.data}
            editable={{
                onRowAdd:(bewData)=>
                new Promise((resolve))=>{
                    setTimeout(()=>{
                        resolve();
                        this.setState((prevState)=>{
                            const data = [...prevState.data];
                            data.push(newData);
                            return{ ...prevState,data};
                        });
                    },600);
                }),
                onRowUpdate:(newData,oldData) =>
                new Promise((resolve)=>{
                    setTimeout(()=>{
                        resolve();
                        if(oldData){
                            this.setState((prevState)=>{
                                const fata =[...prevState];
                                data[data.indexOf(oldData)]=newData;
                                return{...prevState,data};
                            });
                        }
                    },600);
                    }),
                    onRowDelete:(oldData)=>
                    new Promise((resolve)=>{
                        setTimeout(()=>{
                            resolve();
                            this.setState((prevState)=>{
                                const fata =[...prevState];
                                data[data.indexOf(oldData)]=newData;
                                return{...prevState,data};
                            });
                        },600);
                    }),
                }}
                />
                </Container>
            </div>
            };
        }
    }

export default Users;
