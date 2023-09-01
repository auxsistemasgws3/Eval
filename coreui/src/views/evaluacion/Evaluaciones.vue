<template>
  <div>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-Chat-Bubble" size="xl" class="mt-1" />
        <span class="h4" align="right">Evaluaciones
          <label for="file"></label>
        </span>
      </CCardHeader>
    </CCard>
    <CCard>
      <CCardBody>
        <CRow>
          <CCol v-if="Object.keys(this.usuarios_evaluar).length != 0" sm="12">
            <CCard>
              <CCardHeader>
                <CButton color="secondary" disabled size="sm">
                  <CIcon name="cil-Speedometer" />
                </CButton>
                <label><b>Desempeño</b></label>
              </CCardHeader>
              <CCardBody v-for="(item, idx) in usuarios_evaluar" :key="'grap' + idx">
                <table class="table-sm table-bordered" width="100%">
                  <tr>
                    <label><b>{{item.label}}</b> - {{item.puesto}}</label>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                      <CButton class="me-md-2" style="width: 200px;" color="primary"
                        @click="InformacionDesempeño(item.value), editModalDesempeno = true">
                        Evaluar
                      </CButton>
                    </div>
                  </tr>
                </table>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol v-if="Object.keys(this.usuarios_evaluados).length != 0" sm="12">
            <CCard>
              <CCardHeader>
                <h3><b>Calificaciónes de Desempeño:</b></h3>
              </CCardHeader>
                <CCardBody v-for="(item, idx) in usuarios_evaluados" :key="'grap' + idx">  
                  <tr>
                    <label><h4><b>{{item.nombre_evaluado}}</b></h4>  {{item.puesto_evaluado}}</label>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                      <span v-if="item.calificacion_promedio == 100"
                        class="h5">Evaluacion Desempeño: <b style="color:rgba(0, 14, 187, 1)">Extraordinario - {{item.calificacion_promedio}}</b></span>
                      <span v-if="item.calificacion_promedio < 100 && item.calificacion_promedio >= 95"
                        class="h5">Evaluacion Desempeño: <b style="color:rgba(10, 187, 0, 1)">Excelente - {{item.calificacion_promedio}}</b></span>
                      <span v-if="item.calificacion_promedio < 95 && item.calificacion_promedio >= 85"
                        class="h5">Evaluacion Desempeño: <b style="color:rgba(238, 232, 46, 1)">Notable - {{item.calificacion_promedio}}</b></span>
                      <span v-if="item.calificacion_promedio < 85 && item.calificacion_promedio >= 80"
                        class="h5">Evaluacion Desempeño: <b style="color:rgba(239, 114, 21, 1)">Aceptable - {{item.calificacion_promedio}}</b></span>
                      <span v-if="item.calificacion_promedio < 80 && item.calificacion_promedio >= 0"
                        class="h5">Evaluacion Desempeño: <b style="color:rgba(239, 21, 21, 1)">Insuficiente - {{item.calificacion_promedio}}</b></span>
                    </div>
                  </tr>
              </CCardBody>
            </CCard>
          </CCol>
          
          <CCol v-if="Object.keys(this.lideresAEvaluar).length != 0" sm="12">
            <CCard v-if="(this.lider == 1)">
              <CCardHeader>
                <CButton color="secondary" disabled size="sm">
                  <CIcon name="cil-Speedometer" />
                </CButton>
                <label><b>Evaluacion a Lideres</b></label>
              </CCardHeader>
              <CCardBody v-for="(item, idx) in lideresAEvaluar" :key="'grap' + idx">
                <table class="table-sm table-bordered" width="100%">
                  <tr>
                    <label><b>{{item.label}}</b> - {{item.puesto}}</label>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                      <CButton class="me-md-2" style="width: 200px;" color="primary"
                        @click="InformacionEntreLideres(item.value), editModalEntreLideres = true">
                        Evaluar
                      </CButton>
                    </div>
                  </tr>
                </table>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol sm="3"></CCol>
          <CCol sm="6">
            <CCard>
              <CCardHeader>
                <CButton color="secondary" disabled size="sm">
                  <CIcon name="cil-Star" />
                </CButton>
                <label><b>Lider</b></label>

              </CCardHeader>
              <CCardBody>
                <CButton size="lg" class="mx-auto" style="width: 200px;" color="success"
                  @click="InformacionLider(user.jefe_inmediato), editModalLider = true">
                  Evaluación
                </CButton>
                <CCardBody v-for="(item, idx) in lider_Evaluados" :key="'grap' + idx">
                  <tr>
                    <label><h4><b>{{item.nombre_evaluado}}</b></h4>  {{item.puesto_evaluado}} <h4><b>{{"EVALUACION REALIZADA"}}</b></h4></label>
                  </tr>
                </CCardBody>
              </CCardBody>
            </CCard>
            <!-- <CCard v-if="(this.id_departamento == 2  || this.id_departamento == 4 || this.id_departamento == 9)">
                <CCardHeader>
                  <CButton color="secondary" disabled size="sm">
                    <CIcon name="cil-mood-good" />
                  </CButton>
                  <label><b>Evaluacion Grupal</b></label>
                </CCardHeader>
                <CCardBody>
                  <CButton size="lg" class="mx-auto" style="width: 200px;" color="success"
                    @click="InformacionGrupal(user.id), editModalGrupal = true">
                    Evaluación
                  </CButton>
                  <CCardBody v-for="(item, idx) in grupoEvaluados" :key="'grap' + idx">  
                    <tr>
                      <label><h4><b>{{item.nombre_evaluado}}</b></h4>  {{item.puesto_evaluado}} <h4><b>{{"EVALUACION REALIZADA"}}</b></h4></label>
                    </tr>
                   </CCardBody>
                </CCardBody>
            </CCard> -->
          </CCol>

          <CCol sm="3"></CCol>
          <CCol v-for="(item, idx) in evaluacionesDepartamentos" :key="'grap' + idx" sm="6">
            <CCard>
              <CCardHeader>
                <CButton color="secondary" disabled size="sm">
                  <CIcon name="cil-Globe-Alt" />
                </CButton>
                <label><b></b></label>
                <label v-if="item.lider != null"><b>{{item.name}} - {{ item.lider.name }} {{ item.lider.primer_apellido }} </b></label>
                <label v-if="item.lider == null"><b>{{item.name}} </b></label>

              </CCardHeader>
              <CCardBody>
                <CButton size="lg" class="mx-auto" style="width: 200px;" color="primary"
                  @click="InformacionDepartamento(item.code), editModalDepartamento = true">
                  Evaluación
                </CButton>
              </CCardBody>
            </CCard>
          </CCol>
          
          <CRow v-if="(this.Meshoy == 12 || this.Meshoy == 6)">
            <CCol sm="3"></CCol>
            <CCol sm="6">
              <CCard>
                <CCardHeader>
                  <CButton color="secondary" disabled size="sm">
                    <CIcon name="cil-mood-good" />
                  </CButton>
                  <label><b>Clima Laboral</b></label>
                </CCardHeader>
                <CCardBody>
                  <CButton size="lg" class="mx-auto" style="width: 200px;" color="success"
                    @click="InformacionClimaLaboral(user.id), editModalClimaLaboral = true">
                    Evaluación
                  </CButton>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol sm="3"></CCol>
          </CRow>
        </CRow>
      </CCardBody>
    </CCard>
    <!-- ----------------------GRUPAL----------------------------------------------------------- -->
    <CModal :entered="true" title="Evaluación Grupal" size="xl" :show.sync="editModalGrupal">
      <div slot="footer">
        <CCol sm="6">
          <CButton
            v-if="no_questions == Object.keys(this.respuestas).length && usuario_evaluar.comentarios !== '' && usuario_evaluar.comentarios.length > 49 "
            @click="AddEvaluacion(5), editModalGrupal = false" color="success" variant="outline"> Enviar
            Respuestas </CButton>
        </CCol>
      </div>
      <h3 class="text-center">Departamento de Recursos Humanos</h3>
      <p></p>
      <table class="table">
        <tbody width="100%">
          <tr>
            <th colspan="2" width="70%">
              <CInput :value.sync="usuario_evaluar.nombre" label="Nombre:" placeholder="Ingrese su nombre" disabled />
            </th>
            <th width="30%">
              <!-- <CSelect :value.sync="usuario_evaluar.id_departamento" :plain="true" disabled label="Departamento:"
                :options="departamentos_lst" placeholder="Selecciona un Departamento" /> -->
                <CInput :value.sync="usuario_evaluar.puesto" label="Puesto:" placeholder="Ingrese su puesto" disabled />
            </th>
          </tr>
          <tr>
            <th width="40%">
              <!-- <CSelect :value.sync="usuario_evaluar.periodo" :plain="true" label="Periodo:" :options="periodos_lst"
                placeholder="Selecciona un periodo" :invalid-feedback="
                  v$.usuario_evaluar.periodo.$error
                    ? v$.usuario_evaluar.periodo.$errors[0].$message
                    : ''
                " :is-valid="
                  v$.usuario_evaluar.periodo.$dirty
                    ? !v$.usuario_evaluar.periodo.$invalid
                    : null
                " /> -->
                <CInput :value.sync="usuario_evaluar.periodos_lst" label="Periodo:"
                placeholder="Selecciona un periodo" disabled />
            </th>
            <th width="30%">
              <CInput :value.sync="usuario_evaluar.fecha_evaluacion" label="Fecha de Evaluación:"
                place holder="Ingrese fecha" type="date" disabled />
            </th>
            <th width="30%">
              <CSelect :value.sync="usuario_evaluar.sucursal" :plain="true" disabled label="Sucursal"
                :options="sucursales_lst" placeholder="Selecciona una Sucursal" />
            </th>
          </tr>
        </tbody>
      </table>
      <p>
        Buen día, estimado <b>{{user.name}}</b> esta evaluación tiene como fin analizar la forma en que el personal
        percibe el ambiente de trabajo en el que se desempeña, de esta manera con la colaboración de todos podremos
        mejorar nuestro entorno laboral.
      </p>
      <p>
        <font color="green">Siempre: </font><b>5, </b>
        <font color="blue">Casi siempre: </font><b>4, </b>
        <font color="teal">Algunas veces: </font><b>3, </b>
        <font color="orange">Casi nunca: </font><b>2, </b>
        <font color="red">Nunca: </font><b>1, </b>
      </p>
      <b>
        <CIcon name="cil-mood-good" size="xl" class="mb-1" />
        <h4>Liderazgo del encargado del area</h4>
      </b>
      <p></p>
      <table class="table table-hover table-sm table-bordered">
        <thead class="thead-light">
          <tr class="py-2">
            <th colspan="2" width="50%"><strong>Factores a Ser Evaluados</strong></th>
            <th width="50%"><strong>Opciones</strong></th>
            <th width="50%"><strong>Calificación</strong></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in questions" :key="'grap' + idx">
            <td class="text-center" width="2%">
              <b>{{item.value}}</b>
            </td>
            <td width="60%">
              <label><b>{{item.label}}</b></label>
            </td>
            <td class="text-center" width="30%">
              <CInputRadio v-for="option in calificaciones_lst" :key="'calif' + option.value" :label="option.label"
                :value="option.value" type="radio" size="sm" custom inline
                @update:checked="selectEncuestaRadio(option.value, idx)" :checked="option.value == respuestas[idx]"
                v-model="respuestas[idx]" />
            </td>
            <td class="text-center" width="8%">
              {{respuestas[idx]}}-Puntos
            </td>
          </tr>
        </tbody>
      </table>
      <CCol sm="12">
        <CTextarea v-model="v$.usuario_evaluar.comentarios.$model" label="Comentarios: Minimo 50 caracteres"
          placeholder="En que podemos mejorar" rows="3" :invalid-feedback="
            v$.usuario_evaluar.comentarios.$error
            ? v$.usuario_evaluar.comentarios.$errors[0].$message
            : ''
          " :is-valid="
            v$.usuario_evaluar.comentarios.$dirty
            ? !v$.usuario_evaluar.comentarios.$invalid
            : null
          " />
      </CCol>
    </CModal>
    <!-- --------------------------------------DESEMPEÑO----------------------------------------------- -->
    <CModal :entered="true" title="Evaluación de Desempeño" size="xl" :show.sync="editModalDesempeno">
      <div slot="footer">
        <CCol sm="6">
          <CButton
            v-if="no_questions == Object.keys(this.respuestas).length  && usuario_evaluar.comentarios !== '' && usuario_evaluar.comentarios.length > 49 && usuario_evaluar.retroalimentacionOtorgada !== '' "
            @click="AddEvaluacion(1), editModalDesempeno = false" color="success" variant="outline"> Enviar Respuestas
          </CButton>
        </CCol>
      </div>
      <h3 class="text-center">Departamento de Recursos Humanos</h3>
      <p></p>
      <table class="table">
        <tbody width="100%">
          <tr>
            <th colspan="2" width="70%">
              <CInput :value.sync="usuario_evaluar.nombre" label="Nombre:" placeholder="Ingrese su nombre" disabled />
            </th>
            <th width="30%">
              <CInput :value.sync="usuario_evaluar.puesto" label="Puesto:" placeholder="Ingrese su puesto" disabled />
            </th>
          </tr>
          <tr>
            <th width="40%">
              <!-- <CSelect :value.sync="usuario_evaluar.periodo" :plain="true" label="Periodo:" :options="periodos_lst"
                placeholder="Selecciona un periodo" :invalid-feedback="
                  v$.usuario_evaluar.periodo.$error
                    ? v$.usuario_evaluar.periodo.$errors[0].$message
                    : ''
                " :is-valid="
                  v$.usuario_evaluar.periodo.$dirty
                    ? !v$.usuario_evaluar.periodo.$invalid
                    : null
                " /> -->
                <CInput :value.sync="usuario_evaluar.periodos_lst" label="Periodo:"
                placeholder="Selecciona un periodo" disabled />
            </th>
            <th width="30%">
              <CSelect :value.sync="usuario_evaluar.supervisor" :plain="true" disabled label="Supervisor:"
                :options="usuarios" placeholder="Selecciona un Supervisor" />
            </th>
            <th width="30%">
              <CSelect :value.sync="usuario_evaluar.id_departamento" :plain="true" disabled label="Departamento:"
                :options="departamentos_lst" placeholder="Selecciona un Departamento" />
            </th>
          </tr>
          <tr>
            <th colspan="2" width="70%">
              <CInput :value.sync="usuario_evaluar.fecha_evaluacion" label="Fecha de Evaluación:"
                placeholder="Ingrese fecha" type="date" disabled />
            </th>
            <th width="30%">
              <CSelect :value.sync="usuario_evaluar.sucursal" :plain="true" disabled label="Sucursal"
                :options="sucursales_lst" placeholder="Selecciona una Sucursal" />
            </th>
          </tr>
        </tbody>
      </table>
      <p>
        Buen día, estimado <b>{{user.name}}</b> esta evaluación tiene como fin analizar la forma en que el personal
        percibe el ambiente de trabajo en el que se desempeña, de esta manera con la colaboración de todos podremos
        mejorar nuestro entorno laboral.
      </p>
      <p>
        <font color="green"><b>EXCELENTE:</b></font> El empleado desempeña el puesto con nitidez y esmero.
      </p>
      <p>
        <font color="blue"><b>MUY BUENO:</b></font> El empleado desempeña sus labores eficientemente, raras veces comete
        errores.
      </p>
      <p>
        <font color="teal"><b>BUENO:</b></font> El empleado desempeña el cargo adecuadamente, necesita retroalimenta
        para optimizar sus labores.
      </p>
      <p>
        <font color="orange"><b>NECESITA MEJORAR:</b></font> El empleado desempaña el cargo con deficiencias que pueden
        superarse con capacitación y retroalimentación adecuada.
      </p>
      <p>
        <font color="red"><b>INSUFICIENTE:</b></font> El empleado no cumple con los requerimientos exigidos por el
        cargo.
      </p>
      <b>
        <CIcon name="cil-Speedometer" size="xl" class="mb-1" />
        <h4>Desempeño</h4>
      </b>
      <p></p>
      <table class="table table-hover table-sm table-bordered">
        <thead class="thead-light">
          <tr class="py-2">
            <th colspan="2" width="50%"><strong>Factores a Ser Evaluados</strong></th>
            <th width="50%"><strong>Opciones</strong></th>
            <th width="50%"><strong>Calificación</strong></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in questions" :key="'grap' + idx">
            <td class="text-center" width="2%">
              <b>{{item.value}}</b>
            </td>
            <td width="60%">
              <label><b>{{item.label}}</b></label>
            </td>
            <td class="text-center" width="30%">
              <CInputRadio v-for="option in calificaciones_lst" :key="'calif' + option.value" :label="option.label"
                :value="option.value" type="radio" size="sm" custom inline
                @update:checked="selectEncuestaRadio(option.value, idx)" :checked="option.value == respuestas[idx]"
                v-model="respuestas[idx]" />
            </td>
            <td class="text-center" width="8%">
              {{respuestas[idx]}}-Puntos
            </td>
          </tr>
        </tbody>
      </table>
      <CCol sm="12">
        <CTextarea v-model="v$.usuario_evaluar.comentarios.$model" label="Comentarios: Minimo 50 caracteres"
          placeholder="En que podemos mejorar" rows="3" :invalid-feedback="
            v$.usuario_evaluar.comentarios.$error
            ? v$.usuario_evaluar.comentarios.$errors[0].$message
            : ''
          " :is-valid="
            v$.usuario_evaluar.comentarios.$dirty
            ? !v$.usuario_evaluar.comentarios.$invalid
            : null
          " />
      </CCol>
      <CCol>
        <label>
          <input type="checkbox" name="retroalimentacionOtorgada" id="retroalimentacionOtorgada"
            v-model="v$.usuario_evaluar.retroalimentacionOtorgada.$model" value="Retroalimentacion Otorgada">
          <strong>Le di a conocer la puntuación y retroalimentación al colaborador.</strong></label>
      </CCol>
    </CModal>
    <!-- -------------------------------LIDER-------------------------------------------------- -->
    <CModal :entered="true" title="Evaluación de Lider" size="xl" :show.sync="editModalLider">
      <div slot="footer">
        <CCol sm="6">
          <CButton
            v-if="no_questions == Object.keys(this.respuestas).length  && usuario_evaluar.comentarios !== null && usuario_evaluar.comentarios.length > 49 && usuario_evaluar.retroalimentacionOtorgada !== '' && desempenoValidacion !== null "
            @click="AddEvaluacion(2), editModalLider = false" color="success" variant="outline"> Enviar Respuestas
          </CButton>
        </CCol>
      </div>
      <h3 class="text-center">Departamento de Recursos Humanos</h3>
      <p></p>
      <table class="table">
        <tbody width="100%">
          <tr>
            <th colspan="2" width="70%">
              <CInput :value.sync="usuario_evaluar.nombre" label="Supervisor:" placeholder="Ingrese su nombre"
                disabled />
            </th>
            <th width="30%">
              <CSelect :value.sync="usuario_evaluar.id_departamento" :plain="true" disabled label="Departamento:"
                :options="departamentos_lst" placeholder="Selecciona un Departamento" />
            </th>
          </tr>
          <tr>
            <th width="40%">
              <!-- <CSelect :value.sync="usuario_evaluar.periodo" :plain="true" label="Periodo:" :options="periodos_lst"
                placeholder="Selecciona un periodo" @change="getDesempenoValidacion(usuario_evaluar.periodo)"
                :invalid-feedback="
                  v$.usuario_evaluar.periodo.$error
                    ? v$.usuario_evaluar.periodo.$errors[0].$message
                    : ''
                " :is-valid="
                  v$.usuario_evaluar.periodo.$dirty
                    ? !v$.usuario_evaluar.periodo.$invalid
                    : null
                " /> -->
                 <CInput :value.sync="usuario_evaluar.periodos_lst" label="Periodo:" 
                placeholder="Selecciona un periodo" disabled/>
            </th>
            <th width="30%">
              <CInput :value.sync="usuario_evaluar.fecha_evaluacion" label="Fecha de Evaluación:"
                placeholder="Ingrese fecha" type="date" disabled />
            </th>
            <th width="30%">
              <CSelect :value.sync="usuario_evaluar.sucursal" :plain="true" disabled label="Sucursal"
                :options="sucursales_lst" placeholder="Selecciona una Sucursal" />
            </th>
          </tr>
        </tbody>
      </table>
      <p>
        Buen día, estimado <b>{{user.name}}</b> esta evaluación tiene como fin analizar la forma en que el personal
        percibe el ambiente de trabajo en el que se desempeña, de esta manera con la colaboración de todos podremos
        mejorar nuestro entorno laboral.
      </p>
      <p>
        <font color="green">Siempre: </font><b>5, </b>
        <font color="blue">Casi siempre: </font><b>4, </b>
        <font color="teal">Algunas veces: </font><b>3, </b>
        <font color="orange">Casi nunca: </font><b>2, </b>
        <font color="red">Nunca: </font><b>1, </b>
      </p>
      <b>
        <CIcon name="cil-Star" size="xl" class="mb-1" />
        <h4>Lider</h4>
      </b>
      <p></p>
      <table class="table table-hover table-sm table-bordered">
        <thead class="thead-light">
          <tr class="py-2">
            <th colspan="2" width="50%"><strong>Factores a Ser Evaluados</strong></th>
            <th width="50%"><strong>Opciones</strong></th>
            <th width="50%"><strong>Calificación</strong></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in questions" :key="'grap' + idx">
            <td class="text-center" width="2%">
              <b>{{item.value}}</b>
            </td>
            <td width="60%">
              <label><b>{{item.label}}</b></label>
            </td>
            <td class="text-center" width="30%">
              <CInputRadio v-for="option in calificaciones_lst" :key="'calif' + option.value" :label="option.label"
                :value="option.value" type="radio" size="sm" custom inline
                @update:checked="selectEncuestaRadio(option.value, idx)" :checked="option.value == respuestas[idx]"
                v-model="respuestas[idx]" />
            </td>
            <td class="text-center" width="8%">
              {{respuestas[idx]}}-Puntos
            </td>
          </tr>
        </tbody>
      </table>
      <CCol sm="12">
        <CTextarea v-model="v$.usuario_evaluar.comentarios.$model" label="Comentarios:       Mínimo 50 caracteres"
          placeholder="En que podemos mejorar" rows="3" :invalid-feedback="
            v$.usuario_evaluar.comentarios.$error
            ? v$.usuario_evaluar.comentarios.$errors[0].$message
            : ''
          " :is-valid="
            v$.usuario_evaluar.comentarios.$dirty
            ? !v$.usuario_evaluar.comentarios.$invalid
            : null
          " />
      </CCol>
      <CCol>
        <label>
          <strong>Mi líder me dio a conocer mi evaluación, fortalezas y áreas de oportunidad y me compartió un plan de
            acción.</strong></label>
        <br>
        <select v-model="v$.usuario_evaluar.retroalimentacionOtorgada.$model">
          <option hidden disabled selected>Selecciona el valor de tu evaluacion</option>
          <option value="Extraordinario">Extraordinario (100)</option>
          <option value="Excelente">Excelente (99-95)</option>
          <option value="Notable">Notable (94-85)</option>
          <option value="Aceptable">Aceptable (84-80)</option>
          <option value="Insuficiente">Insuficiente (79-0)</option>
        </select>
      </CCol>
    </CModal>
    <!-- -------------------------------EVALUACION ENTRE LIDER-------------------------------------------------- -->
    <CModal :entered="true" title="Evaluación entre Lider" size="xl" :show.sync="editModalEntreLideres">
      <div slot="footer">
        <CCol sm="6">
          <CButton
            v-if="no_questions == Object.keys(this.respuestas).length  && usuario_evaluar.comentarios !== null && usuario_evaluar.comentarios.length > 49 "
            @click="AddEvaluacion(6), editModalEntreLideres = false" color="success" variant="outline"> Enviar Respuestas
          </CButton>
        </CCol>
      </div>
      <h3 class="text-center">Departamento de Recursos Humanos</h3>
      <p></p>
      <table class="table">
        <tbody width="100%">
          <tr>
            <th colspan="2" width="70%">
              <CInput :value.sync="usuario_evaluar.nombre" label="Supervisor:" placeholder="Ingrese su nombre"
                disabled />
            </th>
            <th width="30%">
              <CSelect :value.sync="usuario_evaluar.id_departamento" :plain="true" disabled label="Departamento:"
                :options="departamentos_lst" placeholder="Selecciona un Departamento" />
            </th>
          </tr>
          <tr>
            <th width="40%">
              <!-- <CSelect :value.sync="usuario_evaluar.periodo" :plain="true" label="Periodo:" :options="periodos_lst"
                placeholder="Selecciona un periodo" @change="getDesempenoValidacion(usuario_evaluar.periodo)"
                :invalid-feedback="
                  v$.usuario_evaluar.periodo.$error
                    ? v$.usuario_evaluar.periodo.$errors[0].$message
                    : ''
                " :is-valid="
                  v$.usuario_evaluar.periodo.$dirty
                    ? !v$.usuario_evaluar.periodo.$invalid
                    : null
                " /> -->
                 <CInput :value.sync="usuario_evaluar.periodos_lst" label="Periodo:"
                placeholder="Selecciona un periodo" disabled/>
            </th>
            <th width="30%">
              <CInput :value.sync="usuario_evaluar.fecha_evaluacion" label="Fecha de Evaluación:"
                placeholder="Ingrese fecha" type="date" disabled />
            </th>
            <th width="30%">
              <CSelect :value.sync="usuario_evaluar.sucursal" :plain="true" disabled label="Sucursal"
                :options="sucursales_lst" placeholder="Selecciona una Sucursal" />
            </th>
          </tr>
        </tbody>
      </table>
      <p>
        Buen día, estimado <b>{{user.name}}</b> esta evaluación tiene como fin analizar la forma en que el personal
        percibe el ambiente de trabajo en el que se desempeña, de esta manera con la colaboración de todos podremos
        mejorar nuestro entorno laboral.
      </p>
      <p>
        <font color="green">Siempre: </font><b>5, </b>
        <font color="blue">Casi siempre: </font><b>4, </b>
        <font color="teal">Algunas veces: </font><b>3, </b>
        <font color="orange">Casi nunca: </font><b>2, </b>
        <font color="red">Nunca: </font><b>1, </b>
      </p>
      <b>
        <CIcon name="cil-Star" size="xl" class="mb-1" />
        <h4>Lider</h4>
      </b>
      <p></p>
      <table class="table table-hover table-sm table-bordered">
        <thead class="thead-light">
          <tr class="py-2">
            <th colspan="2" width="50%"><strong>Factores a Ser Evaluados</strong></th>
            <th width="50%"><strong>Opciones</strong></th>
            <th width="50%"><strong>Calificación</strong></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in questions" :key="'grap' + idx">
            <td class="text-center" width="2%">
              <b>{{item.value}}</b>
            </td>
            <td width="60%">
              <label><b>{{item.label}}</b></label>
            </td>
            <td class="text-center" width="30%">
              <CInputRadio v-for="option in calificaciones_lst" :key="'calif' + option.value" :label="option.label"
                :value="option.value" type="radio" size="sm" custom inline
                @update:checked="selectEncuestaRadio(option.value, idx)" :checked="option.value == respuestas[idx]"
                v-model="respuestas[idx]" />
            </td>
            <td class="text-center" width="8%">
              {{respuestas[idx]}}-Puntos
            </td>
          </tr>
        </tbody>
      </table>
      <CCol sm="12">
        <CTextarea v-model="v$.usuario_evaluar.comentarios.$model" label="Comentarios:       Mínimo 50 caracteres"
          placeholder="En que podemos mejorar" rows="3" :invalid-feedback="
            v$.usuario_evaluar.comentarios.$error
            ? v$.usuario_evaluar.comentarios.$errors[0].$message
            : ''
          " :is-valid="
            v$.usuario_evaluar.comentarios.$dirty
            ? !v$.usuario_evaluar.comentarios.$invalid
            : null
          " />
      </CCol>
    </CModal>
    <!-- ----------------------CLIMA LABORAL----------------------------------------------------------- -->
    <CModal :entered="true" title="Evaluación de Clima Laboral" size="xl" :show.sync="editModalClimaLaboral">
      <div slot="footer">
        <CCol sm="6">
          <CButton
            v-if="no_questions == Object.keys(this.respuestas).length  && usuario_evaluar.comentarios !== '' && usuario_evaluar.comentarios.length > 49 
            && usuario_evaluar.comentarios2 !== '' && usuario_evaluar.comentarios2.length > 49 
            && usuario_evaluar.comentarios3 !== '' && usuario_evaluar.comentarios3.length > 49"
            @click="AddEvaluacion(3), editModalClimaLaboral = false" color="success" variant="outline"> Enviar
            Respuestas </CButton>
        </CCol>
      </div>
      <h3 class="text-center">Departamento de Recursos Humanos</h3>
      <p></p>
      <table class="table">
        <tbody width="100%">
          <tr>
            <th colspan="2" width="70%">
              <CInput :value.sync="usuario_evaluar.nombre" label="Nombre:" placeholder="Ingrese su nombre" disabled />
            </th>
            <th width="30%">
              <CSelect :value.sync="usuario_evaluar.id_departamento" :plain="true" disabled label="Departamento:"
                :options="departamentos_lst" placeholder="Selecciona un Departamento" />
            </th>
          </tr>
          <tr>
            <th width="40%">
              <!-- <CSelect :value.sync="usuario_evaluar.periodo" :plain="true" label="Periodo:" :options="periodos_lst"
                placeholder="Selecciona un periodo" :invalid-feedback="
                  v$.usuario_evaluar.periodo.$error
                    ? v$.usuario_evaluar.periodo.$errors[0].$message
                    : ''
                " :is-valid="
                  v$.usuario_evaluar.periodo.$dirty
                    ? !v$.usuario_evaluar.periodo.$invalid
                    : null
                " /> -->
                <CInput :value.sync="usuario_evaluar.periodos_lst" label="Periodo:"
                placeholder="Selecciona un periodo" disabled />
            </th>
            <th width="30%">
              <CInput :value.sync="usuario_evaluar.fecha_evaluacion" label="Fecha de Evaluación:"
                placeholder="Ingrese fecha" type="date" disabled />
            </th>
            <th width="30%">
              <CSelect :value.sync="usuario_evaluar.sucursal" :plain="true" disabled label="Sucursal"
                :options="sucursales_lst" placeholder="Selecciona una Sucursal" />
            </th>
          </tr>
        </tbody>
      </table>
      <p>
        Buen día, estimado <b>{{user.name}}</b> esta evaluación tiene como fin analizar la forma en que el personal
        percibe el ambiente de trabajo en el que se desempeña, de esta manera con la colaboración de todos podremos
        mejorar nuestro entorno laboral.
      </p>
      <p>
        <font color="green">Siempre: </font><b>5, </b>
        <font color="blue">Casi siempre: </font><b>4, </b>
        <font color="teal">Algunas veces: </font><b>3, </b>
        <font color="orange">Casi nunca: </font><b>2, </b>
        <font color="red">Nunca: </font><b>1, </b>
      </p>
      <b>
        <CIcon name="cil-mood-good" size="xl" class="mb-1" />
        <h4>Clima Laboral</h4>
      </b>
      <p></p>
      <table class="table table-hover table-sm table-bordered">
        <thead class="thead-light">
          <tr class="py-2">
            <th colspan="2" width="50%"><strong>Factores a Ser Evaluados</strong></th>
            <th width="50%"><strong>Opciones</strong></th>
            <th width="50%"><strong>Calificación</strong></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in questions" :key="'grap' + idx">
            <td class="text-center" width="2%">
              <b>{{item.value}}</b>
            </td>
            <td width="60%">
              <label><b>{{item.label}}</b></label>
            </td>
            <td class="text-center" width="30%">
              <CInputRadio v-for="option in calificaciones_lst" :key="'calif' + option.value" :label="option.label"
                :value="option.value" type="radio" size="sm" custom inline
                @update:checked="selectEncuestaRadio(option.value, idx)" :checked="option.value == respuestas[idx]"
                v-model="respuestas[idx]" />
            </td>
            <td class="text-center" width="8%">
              {{respuestas[idx]}}-Puntos
            </td>
          </tr>
        </tbody>
      </table>
      <CCol sm="12">
        <CTextarea v-model="v$.usuario_evaluar.comentarios.$model" label="Comentarios: Minimo 50 caracteres"
          placeholder="En que podemos mejorar" rows="3" :invalid-feedback="
            v$.usuario_evaluar.comentarios.$error
            ? v$.usuario_evaluar.comentarios.$errors[0].$message
            : ''
          " :is-valid="
            v$.usuario_evaluar.comentarios.$dirty
            ? !v$.usuario_evaluar.comentarios.$invalid
            : null
          " />
      </CCol>
      <CCol sm="12">
        <CTextarea v-model="v$.usuario_evaluar.comentarios2.$model" label="¿Que mejorarías en tu equipo? Minimo 50 caracteres (No olvides mencionar a tu equipo)"
          placeholder="¿Que mejorarías en tu equipo? No olvides mencionar a tu equipo" rows="3" :invalid-feedback="
            v$.usuario_evaluar.comentarios2.$error
            ? v$.usuario_evaluar.comentarios2.$errors[0].$message
            : ''
          " :is-valid="
            v$.usuario_evaluar.comentarios2.$dirty
            ? !v$.usuario_evaluar.comentarios2.$invalid
            : null
          " />
      </CCol>
      <CCol sm="12">
        <CTextarea v-model="v$.usuario_evaluar.comentarios3.$model" label="¿Que mejorarías en la empresa? Minimo 50 caracteres"
          placeholder="¿En que podemos mejorar?" rows="3" :invalid-feedback="
            v$.usuario_evaluar.comentarios3.$error
            ? v$.usuario_evaluar.comentarios3.$errors[0].$message
            : ''
          " :is-valid="
            v$.usuario_evaluar.comentarios3.$dirty
            ? !v$.usuario_evaluar.comentarios3.$invalid
            : null
          " />
      </CCol>
    </CModal>
    <!-- --------------------------------DEPARTAMENTO------------------------------------------------- -->
    <CModal :entered="true" title="Evaluación de Departamento" size="xl" :show.sync="editModalDepartamento">
      <div slot="footer">
        <CCol sm="6">
          <CButton
            v-if="no_questions == Object.keys(this.respuestas).length && usuario_evaluar.comentarios !== '' && usuario_evaluar.comentarios.length > 49 "
            @click="AddEvaluacionDep(departamentoActivo.code), editModalDepartamento = false" color="success"
            variant="outline"> Enviar Respuestas </CButton>
        </CCol>
      </div>
      <h3 class="text-center">Departamento de Recursos Humanos</h3>
      <p></p>
      <table class="table">
        <tbody width="100%">
          <tr>
            <th width="40%">
              <!-- <CSelect :value.sync="usuario_evaluar.periodo" :plain="true" label="Periodo:" :options="periodos_lst"
                placeholder="Selecciona un periodo" :invalid-feedback="
                  v$.usuario_evaluar.periodo.$error
                    ? v$.usuario_evaluar.periodo.$errors[0].$message
                    : ''
                " :is-valid="
                  v$.usuario_evaluar.periodo.$dirty
                    ? !v$.usuario_evaluar.periodo.$invalid
                    : null
                " /> -->
                <CInput :value.sync="usuario_evaluar.periodos_lst" label="Periodo:"
                placeholder="Selecciona un periodo" disabled />
            </th>
            <th width="30%">
              <CSelect :value.sync="usuario_evaluar.sucursal" :plain="true" disabled label="Sucursal"
                :options="sucursales_lst" placeholder="Selecciona una Sucursal" />
            </th>
          </tr>
          <tr>
            <th colspan="2" width="70%">
              <CInput :value.sync="usuario_evaluar.fecha_evaluacion" label="Fecha de Evaluación:"
                placeholder="Ingrese fecha" type="date" disabled />
            </th>
          </tr>
        </tbody>
      </table>
      <p>
        Buen día, estimado <b>{{user.name}}</b> esta evaluación tiene como fin analizar la forma en que el personal
        percibe el ambiente de trabajo en el que se desempeña, de esta manera con la colaboración de todos podremos
        mejorar nuestro entorno laboral.
      </p>
      <p>
        <font color="green">Siempre: </font><b>5, </b>
        <font color="blue">Casi siempre: </font><b>4, </b>
        <font color="teal">Algunas veces: </font><b>3, </b>
        <font color="orange">Casi nunca: </font><b>2, </b>
        <font color="red">Nunca: </font><b>1, </b>
      </p>
      <b>
        <CIcon name="cil-Globe-Alt" size="xl" class="mb-1" />
        <h4>Departamento <font color="green"><b>{{departamentoActivo.name}}</b></font>
        </h4>
      </b>
      <p></p>
      <table class="table table-hover table-sm table-bordered">
        <thead class="thead-light">
          <tr class="py-2">
            <th colspan="2" width="50%"><strong>Factores a Ser Evaluados</strong></th>
            <th width="50%"><strong>Opciones</strong></th>
            <th width="50%"><strong>Calificación</strong></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in questions" :key="'grap' + idx">
            <td class="text-center" width="2%">
              <b>{{item.value}}</b>
            </td>
            <td width="60%">
              <label><b>{{item.label}}</b></label>
            </td>
            <td class="text-center" width="30%">
              <CInputRadio v-for="option in calificaciones_lst" :key="'calif' + option.value" :label="option.label"
                :value="option.value" type="radio" size="sm" custom inline
                @update:checked="selectEncuestaRadio(option.value, idx)" :checked="option.value == respuestas[idx]"
                v-model="respuestas[idx]" />
            </td>
            <td class="text-center" width="8%">
              {{respuestas[idx]}}-Puntos
            </td>
          </tr>
        </tbody>
      </table>
      <CCol sm="12">
        <CTextarea v-model="v$.usuario_evaluar.comentarios.$model" label="Comentarios: Minimo 50 caracteres"
          placeholder="En que podemos mejorar" rows="3" :invalid-feedback="
            v$.usuario_evaluar.comentarios.$error
            ? v$.usuario_evaluar.comentarios.$errors[0].$message
            : ''
          " :is-valid="
            v$.usuario_evaluar.comentarios.$dirty
            ? !v$.usuario_evaluar.comentarios.$invalid
            : null
          " />
      </CCol>
    </CModal>
  </div>
</template>
<script>
import { required, numeric, maxLength, minLength, requiredIf } from "../../utils/validators";
import { sameAs, not } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import {
  cilAddressBook,
  cilMoodGood,
  cilPlus,
  cilInputPower,
  cilLightbulb,
cilOptionsHorizontal,
} from "@coreui/icons";
import axios from "axios";
import { onActivated, onUpdated } from "vue-demi";

export default {
  name: "AdvancedTables",
  moodGood: cilMoodGood,
  inputPower: cilInputPower,
  plusIcon: cilPlus,
  LightbulbIcon: cilLightbulb,
  
  data() {
    return {
      liderdepartameto:"",
      editModalDesempeno: false,
      editModalLider: false,
      editModalEntreLideres: false,
      editModalClimaLaboral: false,
      editModalDepartamento: false,
      editModalGrupal: false,
      loading: true,
      usuarios_evaluar: [],
      usuario_evaluar: {
        id: "",
        id_departamento: "",
        nombre: "",
        puesto: "",
        periodo: "",
        supervisor: "",
        fecha_evaluacion: "",
        sucursal: "",
        comentarios: "",
        comentarios2: "",
        comentarios3: "",
        retroalimentacionOtorgada: "",
      },
      usuarios_evaluados: [],
      usuarios_evaluados: {
        nombre: "",
        calificacion: ""
      },
      lider_Evaluados: [],
      lider_Evaluados: {
        nombre: "",
        calificacion: ""
      },
      grupoEvaluados: [],
      grupoEvaluados: {
        nombre: "",
        calificacion: ""
      },
      desempenoValidacion: "",
      usuario_departamento: "",
      departamentos_lst: [],
      evaluacionesDepartamentos: "",
      lideresAEvaluar: "",
      periodos_lst: [],
      usuarios: [],
      user: {},
      questions: [],
      no_questions: "",
      Meshoy: "",
      id_departamento: "",
      lider: "",
      departamentoActivo: [],
      items: [],
      calificaciones_lst: [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
        { value: "4", label: "4" },
        { value: "5", label: "5" },
      ],
      sucursales_lst: [
        { value: 4, label: "AGUASCALIENTES" },
        { value: 5, label: "CHIHUAHUA" },
        { value: 6, label: "MONTERREY" },
        { value: 7, label: "JUÁREZ" },
        { value: 8, label: "TORREÓN" },
      ],
      respuestas: {},
      evaluacionesRelizadas: [],
      RecursosHumanosCheck: false,
      ContabilidadCheck: false,
      VentasMayoristasCheck: false,
      LogistciaCheck: false,
      InventariosCheck: false,
      ComprasCheck: false,
      MercadotecniaCheck: false,
      SistemasCheck: false,
      SucursalCUU: false,
      VentasWattSolarCheck: false,
      SoporteTecnicoCheck: false,
    };

  },
  validations() {
    return {
      usuario_evaluar: {
        periodo: {
          maxLength: maxLength(500),
          $autoDirty: true
        },
        comentarios: {
          required,
          maxLength: maxLength(1500),
          minLength: minLength(50),
          $autoDirty: true
        },
        comentarios2: {
          
          maxLength: maxLength(1500),
          minLength: minLength(50),
          $autoDirty: true
        },
        comentarios3: {
          
          maxLength: maxLength(1500),
          minLength: minLength(50),
          $autoDirty: true
        },
        retroalimentacionOtorgada: {
        },
        retroalimentacion: {
        }

      },
    };
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  methods: {
    index() {
      let self = this;
      axios
        .get(
          this.$apiAdress +
          "/api/evaluaciones?token=" +
          localStorage.getItem("api_token")
        )
        .then(function (response) {
          //cilOptionsHorizontal.log(data.status)
          console.log(response.data);
          self.usuarios_evaluar = response.data.usuariosEvaluar;
          self.usuarios_evaluados = response.data.usuariosEvaluados;
          self.lider_Evaluados = response.data.liderEvaluados;
          self.grupoEvaluados = response.data.grupoEvaluados; 
          self.user = response.data.user;
          self.id_departamento = response.data.id_departamento;
          self.lider = response.data.lider;
          console.log("El valor del response.data.departamentos_lst");
          console.log(response.data.departamentos_lst);
          self.evaluacionesDepartamentos = response.data.departamentos_lst;
          self.evaluacionesRelizadas = response.data.evaluacionesRealizadas;
          self.Meshoy = response.data.mes_anterior;
          self.lideresAEvaluar = response.data.lideresAEvaluar;
          console.log(self.lideresAEvaluar);
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
          if (error.response.data.message == "The given data was invalid.") {
            self.message = "";
            self.errors = error.response.data.errors;
            for (let key in error.response.data.errors) {
              if (error.response.data.errors.hasOwnProperty(key)) {
                self.message += error.response.data.errors[key][0] + "  ";
              }
            }
            self.$toast.error(self.message);
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    InformacionDesempeño(id) {
      let self = this;
      axios
        .get(this.$apiAdress +
          "/api/evaluaciones/desempeno/" +
          id +
          "?token=" +
          localStorage.getItem("api_token"),)
        .then(function (response) {
          console.log(response.data);
          self.questions = response.data.questions;
          self.usuario_evaluar.nombre = response.data.usuarioEvaluar[0].name + " " + response.data.usuarioEvaluar[0].primer_apellido + " " + response.data.usuarioEvaluar[0].segundo_apellido;
          self.usuario_evaluar.puesto = response.data.usuarioEvaluar[0].puesto;
          self.usuario_evaluar.sucursal = response.data.usuarioEvaluar[0].sucursal_id;
          self.usuario_evaluar.supervisor = response.data.usuarioEvaluar[0].jefe_inmediato;
          self.usuario_evaluar.id = response.data.usuarioEvaluar[0].id;
          self.usuario_evaluar.id_departamento = response.data.usuarioEvaluar[0].id_departamento;
          self.departamentos_lst = response.data.departamentos_lst;
          self.usuario_evaluar.periodos_lst = response.data.periodos[0];
          self.no_questions = response.data.no_questions;
          self.usuario_evaluar.fecha_evaluacion = response.data.Fechahoy;
          self.usuarios = response.data.usuarios;
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
          if (error.response.data.message == "The given data was invalid.") {
            self.message = "";
            self.errors = error.response.data.errors;
            for (let key in error.response.data.errors) {
              if (error.response.data.errors.hasOwnProperty(key)) {
                self.message += error.response.data.errors[key][0] + "  ";
              }
            }
            self.$toast.error(self.message);
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    async getDesempenoValidacion(periodos_lst) {
      let self = this;
      axios
        .get(this.$apiAdress +
          "/api/evaluaciones/getDesempenoValidacion/" +
          usuario_evaluar.periodos_lst +
          "?token=" +
          localStorage.getItem("api_token"),)

        .then(function (response) {
          self.desempenoValidacion = response.data.desempenoValidacion.id;
          console.log(self.desempenoValidacion);
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
          if (error.response.data.message == "The given data was invalid.") {
            self.message = "";
            self.errors = error.response.data.errors;
            for (let key in error.response.data.errors) {
              if (error.response.data.errors.hasOwnProperty(key)) {
                self.message += error.response.data.errors[key][0] + "  ";
              }
            }
            self.$toast.error(self.message);
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    InformacionEntreLideres(id) {
      let self = this;
      console.log(id);
      console.log("Que onda, que pez");
      axios
        .get(this.$apiAdress +
          "/api/evaluaciones/entreLideres/" +
          id +
          "?token=" +
          localStorage.getItem("api_token"),)
        .then(function (response) {
          console.log(response.data);
          self.questions = response.data.questions;
          self.usuario_evaluar.nombre = response.data.usuarioEvaluar[0].name + " " + response.data.usuarioEvaluar[0].primer_apellido + " " + response.data.usuarioEvaluar[0].segundo_apellido;
          self.usuario_evaluar.puesto = response.data.usuarioEvaluar[0].puesto;
          self.usuario_evaluar.sucursal = response.data.usuarioEvaluar[0].sucursal_id;
          self.usuario_evaluar.supervisor = response.data.usuarioEvaluar[0].jefe_inmediato;
          self.usuario_evaluar.id = response.data.usuarioEvaluar[0].id;
          self.usuario_evaluar.id_departamento = response.data.usuarioEvaluar[0].id_departamento;
          self.departamentos_lst = response.data.departamentos_lst;
          self.usuario_evaluar.periodos_lst = response.data.periodos[0];
          self.no_questions = response.data.no_questions;
          self.usuario_evaluar.fecha_evaluacion = response.data.Fechahoy;
          self.usuarios = response.data.usuarios;
          self.desempenoValidacion = response.data.desempenoValidacion;


        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
          if (error.response.data.message == "The given data was invalid.") {
            self.message = "";
            self.errors = error.response.data.errors;
            for (let key in error.response.data.errors) {
              if (error.response.data.errors.hasOwnProperty(key)) {
                self.message += error.response.data.errors[key][0] + "  ";
              }
            }
            self.$toast.error(self.message);
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    InformacionLider(id) {
      let self = this;
      console.log(id);
      axios
        .get(this.$apiAdress +
          "/api/evaluaciones/lider/" +
          id +
          "?token=" +
          localStorage.getItem("api_token"),)
        .then(function (response) {
          console.log(response.data);
          self.questions = response.data.questions;
          self.usuario_evaluar.nombre = response.data.usuarioEvaluar[0].name + " " + response.data.usuarioEvaluar[0].primer_apellido + " " + response.data.usuarioEvaluar[0].segundo_apellido;
          self.usuario_evaluar.puesto = response.data.usuarioEvaluar[0].puesto;
          self.usuario_evaluar.sucursal = response.data.usuarioEvaluar[0].sucursal_id;
          self.usuario_evaluar.supervisor = response.data.usuarioEvaluar[0].jefe_inmediato;
          self.usuario_evaluar.id = response.data.usuarioEvaluar[0].id;
          self.usuario_evaluar.id_departamento = response.data.usuarioEvaluar[0].id_departamento;
          self.departamentos_lst = response.data.departamentos_lst;
          self.usuario_evaluar.periodos_lst = response.data.periodos[0];
          self.no_questions = response.data.no_questions;
          self.usuario_evaluar.fecha_evaluacion = response.data.Fechahoy;
          self.usuarios = response.data.usuarios;
          self.desempenoValidacion = response.data.desempenoValidacion;


        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
          if (error.response.data.message == "The given data was invalid.") {
            self.message = "";
            self.errors = error.response.data.errors;
            for (let key in error.response.data.errors) {
              if (error.response.data.errors.hasOwnProperty(key)) {
                self.message += error.response.data.errors[key][0] + "  ";
              }
            }
            self.$toast.error(self.message);
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    InformacionGrupal(reference_Type) {
      let self = this;
      console.log(reference_Type);
      axios
        .get(this.$apiAdress +
          "/api/evaluaciones/grupal/" +
          reference_Type +
          "?token=" +
          localStorage.getItem("api_token"),)
        .then(function (response) { //COLOCAR AQUI LOS ACTIVADORES DE LOS MODALES PARA CUANDO CONTESTE LA FUNCION SE DESPLPEGUE
          console.log(response.data);
          self.questions = response.data.questions;
          self.usuario_evaluar.nombre = response.data.usuarioEvaluar[0].name + " " + response.data.usuarioEvaluar[0].primer_apellido + " " + response.data.usuarioEvaluar[0].segundo_apellido;
          self.usuario_evaluar.puesto = response.data.usuarioEvaluar[0].puesto;
          self.usuario_evaluar.sucursal = response.data.usuarioEvaluar[0].sucursal_id;
          self.usuario_evaluar.supervisor = response.data.usuarioEvaluar[0].jefe_inmediato;
          self.usuario_evaluar.id = response.data.usuarioEvaluar[0].id;
          self.usuario_evaluar.id_departamento = response.data.usuarioEvaluar[0].id_departamento;
          self.usuario_evaluar.departamentos_lst = response.data.departamentos_lst[0].departamentos_lst;
          self.usuario_evaluar.periodos_lst = response.data.periodos[0];
          self.no_questions = response.data.no_questions;
          self.usuario_evaluar.fecha_evaluacion = response.data.Fechahoy;
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
          if (error.response.data.message == "The given data was invalid.") {
            self.message = "";
            self.errors = error.response.data.errors;
            for (let key in error.response.data.errors) {
              if (error.response.data.errors.hasOwnProperty(key)) {
                self.message += error.response.data.errors[key][0] + "  ";
              }
            }
            self.$toast.error(self.message);
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    InformacionClimaLaboral(id) {
      let self = this;
      console.log(id);
      axios
        .get(this.$apiAdress +
          "/api/evaluaciones/climaLaboral/" +
          id +
          "?token=" +
          localStorage.getItem("api_token"),)
        .then(function (response) {
          console.log(response.data);
          self.questions = response.data.questions;
          self.usuario_evaluar.nombre = response.data.usuarioEvaluar[0].name + " " + response.data.usuarioEvaluar[0].primer_apellido + " " + response.data.usuarioEvaluar[0].segundo_apellido;
          self.usuario_evaluar.puesto = response.data.usuarioEvaluar[0].puesto;
          self.usuario_evaluar.sucursal = response.data.usuarioEvaluar[0].sucursal_id;
          self.usuario_evaluar.supervisor = response.data.usuarioEvaluar[0].jefe_inmediato;
          self.usuario_evaluar.id = response.data.usuarioEvaluar[0].id;
          self.usuario_evaluar.id_departamento = response.data.usuarioEvaluar[0].id_departamento;
          self.departamentos_lst = response.data.departamentos_lst;
          self.usuario_evaluar.periodos_lst = response.data.periodos[0];
          self.no_questions = response.data.no_questions;
          self.usuario_evaluar.fecha_evaluacion = response.data.Fechahoy;
          self.usuarios = response.data.usuarios;
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
          if (error.response.data.message == "The given data was invalid.") {
            self.message = "";
            self.errors = error.response.data.errors;
            for (let key in error.response.data.errors) {
              if (error.response.data.errors.hasOwnProperty(key)) {
                self.message += error.response.data.errors[key][0] + "  ";
              }
            }
            self.$toast.error(self.message);
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    InformacionDepartamento(reference_Type) {
      let self = this;
      console.log(reference_Type);
      axios
        .get(this.$apiAdress +
          "/api/evaluaciones/departamento/" +
          reference_Type +
          "?token=" +
          localStorage.getItem("api_token"),)
        .then(function (response) { //COLOCAR AQUI LOS ACTIVADORES DE LOS MODALES PARA CUANDO CONTESTE LA FUNCION SE DESPLPEGUE
          console.log(response.data);
          self.questions = response.data.questions;
          self.usuario_evaluar.nombre = response.data.usuarioEvaluar[0].name + " " + response.data.usuarioEvaluar[0].primer_apellido + " " + response.data.usuarioEvaluar[0].segundo_apellido;
          self.usuario_evaluar.puesto = response.data.usuarioEvaluar[0].puesto;
          self.usuario_evaluar.sucursal = response.data.usuarioEvaluar[0].sucursal_id;
          self.usuario_evaluar.supervisor = response.data.usuarioEvaluar[0].jefe_inmediato;
          self.usuario_evaluar.id = response.data.usuarioEvaluar[0].id;
          self.usuario_evaluar.id_departamento = response.data.usuarioEvaluar[0].id_departamento;
          self.usuario_evaluar.periodos_lst = response.data.periodos[0];
          self.no_questions = response.data.no_questions;
          self.usuario_evaluar.fecha_evaluacion = response.data.Fechahoy;
          self.usuarios = response.data.usuarios;
          self.departamentoActivo = response.data.departamentoActivo;
          console.log(response.data.departamentoActivo);
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
          if (error.response.data.message == "The given data was invalid.") {
            self.message = "";
            self.errors = error.response.data.errors;
            for (let key in error.response.data.errors) {
              if (error.response.data.errors.hasOwnProperty(key)) {
                self.message += error.response.data.errors[key][0] + "  ";
              }
            }
            self.$toast.error(self.message);
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    async AddEvaluacion(id_evaluacion) {
      let self = this;
      this.v$.$touch();
      console.log(self.v$);
      if (self.v$.$error) return;
      let isUpdate = await self
        .$swal({
          title: self.$t("¿Esta seguro de enviar tus respuestas?"),
          text: self.$t("messages.question.status.description"),
          icon: "warning",
          showCancelButton: true,
        })
        .then((result) => {
          return result.isConfirmed;
        });
      if (isUpdate) {
        axios
          .post(this.$apiAdress +
            "/api/evaluaciones/addEvaluacion" +
            "?token=" +
            localStorage.getItem("api_token"), {
            id_evaluacion: id_evaluacion,
            nombre_evaluado: self.usuario_evaluar.nombre,
            id_evaluado: self.usuario_evaluar.id,
            periodo_evaluacion: self.usuario_evaluar.periodos_lst,
            id_departamento: self.usuario_evaluar.id_departamento,
            id_jefe_inmediato: self.usuario_evaluar.supervisor,
            puesto_evaluado: self.usuario_evaluar.puesto,
            id_sucursal: self.usuario_evaluar.sucursal,
            fecha_realizada: self.usuario_evaluar.fecha_evaluacion,
            comentarios: self.usuario_evaluar.comentarios,
            comentarios2: self.usuario_evaluar.comentarios2,
            comentarios3: self.usuario_evaluar.comentarios3,
            retroalimentacionOtorgada: self.usuario_evaluar.retroalimentacionOtorgada,
            respuestas: self.respuestas,
          })
          .then(function (response) {
            console.log(response.data);
            self.respuestas = {};
            self.usuario_evaluar.periodo = "";
            self.usuario_evaluar.comentarios = "";
            self.usuario_evaluar.retroalimentacionOtorgada = "";
            self.$toast.success(self.$t("messages.insert"));
            location.reload();
          })
          .catch(function (error) {
            self.respuestas = {};
            self.usuario_evaluar.periodo = "";
            self.usuario_evaluar.comentarios = "";
            self.usuario_evaluar.comentarios2 = "";
            self.usuario_evaluar.comentarios3 = "";
            self.usuario_evaluar.retroalimentacionOtorgada = "";
            if (error.response.status == 500) {
              self.$router.push({ path: "/evaluacion" });
              self.$toast.error(self.$t("messages.ErrorOS1"));
            } if (error.response.status == 401) {
              self.$toast.error(self.$t("Ya realizaste esta Evaluación"));
            }
          });
      }
    },
    async AddEvaluacionDep(id_evaluacionDep) {
      let self = this;
      this.v$.$touch();
      console.log(self.v$);
      console.log(id_evaluacionDep);
      if (self.v$.$error) return;
      console.log('ENTRA');
      let isUpdate = await self
        .$swal({
          title: self.$t("¿Esta seguro de enviar tus respuestas?"),
          text: self.$t("messages.question.status.description"),
          icon: "warning",
          showCancelButton: true,
        })
        .then((result) => {
          return result.isConfirmed;
        });
      if (isUpdate) {
        axios
          .post(this.$apiAdress +
            "/api/evaluaciones/addEvaluacionDep" +
            "?token=" +
            localStorage.getItem("api_token"), {
            nombre_evaluado: self.departamentoActivo.name,
            id_evaluacionDep: id_evaluacionDep,
            //periodo_evaluacion: self.usuario_evaluar.periodo,
            periodo_evaluacion: self.usuario_evaluar.periodos_lst,
            id_sucursal: self.usuario_evaluar.sucursal,
            fecha_realizada: self.usuario_evaluar.fecha_evaluacion,
            comentarios: self.usuario_evaluar.comentarios,
            respuestas: self.respuestas,
          })
          .then(function (response) {
            console.log(response.data);
            self.respuestas = {};
            self.usuario_evaluar.periodo = "";
            self.usuario_evaluar.comentarios = "";
            self.$toast.success(self.$t("messages.insert"));
            location.reload();
          })
          .catch(function (error) {
            self.respuestas = {};
            self.usuario_evaluar.periodo = "";
            self.usuario_evaluar.comentarios = "";
            if (error.response.status == 500) {
              self.$router.push({ path: "/evaluacion" });
              self.$toast.error(self.$t("messages.ErrorOS1"));
            } if (error.response.status == 401) {
              self.$toast.error(self.$t("Ya realizaste esta Evaluación"));
            }
          });
      }
    },
    closeModal() {
      let self = this;

      this.$emit("modalShow", false);
      self.$nextTick(() => {
        /* self.v$.$reset(); */
      });
    },
    selectEncuestaRadio(data, indexOf) {
      this.respuestas[indexOf] = data;
    },
  },
  mounted: function () {
    this.index();
  },
};
</script>