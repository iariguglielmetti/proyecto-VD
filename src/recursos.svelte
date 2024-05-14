<main>
    <div class="recursosNecesarios">
        <h2 class="recursos">Recursos necesarios</h2>

      <div class="todosRecursos">  

        <div class="recursosBajos">
          <img id="imgPocos" src="/images/pocosRecursos.svg" width="100" alt="100"/>
          <p id="pocosRecursos">Pocos</p>
        </div>

        <div class="recursosMedios">
          <img id="imgAlgunos" src="/images/algunosRecursos.svg" width="100" alt="100"/>
          <p id="algunosRecursos">Algunos</p>
        </div>

        <div class="recursosAltos">
          <img id="imgMuchos" src="/images/muchosRecursos.svg" width="100" alt="100"/>
          <p id="muchosRecursos">Muchos</p>
        </div>

      </div>

    </div>
</main>

<style>
  .recursosNecesarios{
    text-align: center;
    font-family: "krona one";
    position: relative;
    bottom: 150px;
    right: 20px;
  }
  .todosRecursos{
    display: inline-flex;
    font-size: 15px;
    position: relative;
    top: 10px;
  }
  .recursosBajos{
    text-align: center;
    position: relative;
    right: 30px;
  }
  .recursosMedios{
    text-align: center;
  }
  .recursosAltos{
    text-align: center;
    position: relative;
    left: 30px;
  }
</style>
