import React from 'react'

const validId = 'myCustomId12345'


const CustomForm : React.FC = props => {

  const inputsHandle= ['Nombre','Apellido Paterno','Apellido Materno']
  const [loading, setLoading] = React.useState(false)
  const [spinnerUpdate, setSpinnerUpdate] = React.useState(false)
  const [showForm, setShowForm] = React.useState(false)
  const [data, setData] = React.useState(['','',''])
  const [id, setId] = React.useState(validId)
  const [warning, setWarning] = React.useState(false)
  
  const getData = () : void => {
    setLoading(true)
    setTimeout(()=>{

      if (id===validId){
        setData(['Juan Javier',
          'Hernández',
          'Pérez' ]
        )
        setShowForm(true)
        setWarning(false)
      }
      else{
        setWarning(true)
        setShowForm(false)
      }
      setLoading(false)
    },1000)
  }

  const changeValue = (e:any, index:number) : void => {

    switch (index){
      case 0:
        setData([e, data[1], data[2]])
      break
      case 1:
        setData([data[0], e, data[2]])
      break
      case 2:
        setData([data[0], data[1], e])
      break
      case 3:
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setId(e)
      break
    }  
  }

  const update = () : void => {
    setSpinnerUpdate(true)
    setTimeout(()=>{
    alert('Actualización exitosa')
    setSpinnerUpdate(false)
    },1000)
  }

  return (
  <section>
    <form onSubmit={(e)=>{
        getData()
        e.preventDefault()
      }}>
      <label>INGRESA ID </label>
      <div className="input-group mb-3">
        <input type="text" 
          className="form-control" 
          placeholder="Ingresa ID Válido"
          value={id}
          onChange={(e)=>{ changeValue(e.target.value,3); }} 
          />
        <div className="input-group-append input-group-lg">
          <button 
            className="btn btn-outline-danger" 
            type="submit"
            >
              {loading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>:null}
              <span className="sr-only">{loading ? '   Cargando' : 'Buscar Datos' }</span>
          </button>
        </div>
      </div>

      {warning ? <label className='text-danger'>*** No se encuentran datos con ese Id ***</label>:null}

      {showForm ?
          (inputsHandle.map((item,index)=>(
            <div 
              className="form-group mt-2 input-group-lg"
              key={item}
            >
              <label>{item}</label>
              <input type="text" 
              className="form-control" 
              id="exampleInputPassword1" 
              placeholder={`Ingresa ${item}`}
              value={data[index]}
              onChange={(e)=>{changeValue(e.target.value,index)}}
              />
            </div>
          ))):null
    }    
  </form>
  { showForm ? 
  <button 
    className='btn btn-outline-danger btn-block col-12 mt-4 btn-lg'
    onClick={update}
    >
    {spinnerUpdate ? 
      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>:null}
      <span className="sr-only">{spinnerUpdate ? '   Actualizando' : 'Actualizar Datos' }</span>
  </button>:null}  
</section>
  )
}

export default CustomForm