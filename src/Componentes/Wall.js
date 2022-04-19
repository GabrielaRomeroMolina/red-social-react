import {Fragment, useState} from 'react';

const Wall = () => {
    return(
        <Fragment>
            <form>
                <div>
                    <input placeholder="Nombre">
                        
                    </input>
                </div>
                <div>
                    <input placeholder="Publicación">
                        
                    </input>
                </div>
                <div>
                    <button type="submit">Publicar</button>
                </div>
            </form>
        </Fragment>
    );
}
export default Wall;