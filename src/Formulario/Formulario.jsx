export function Formulario() {
    return (
        <>
            <form>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                @
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Apellidos"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                @
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombres"
                            />
                        </div>
                    </div>
                </div>

                

                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                @
                            </span>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="edad"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                @
                            </span>
                            <input
                                type="date"
                                className="form-control"
                                placeholder="nacimiento"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                @
                            </span>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="documento"
                            />
                        </div>
                    </div>
                </div>



               

            </form>
        </>
    )
}