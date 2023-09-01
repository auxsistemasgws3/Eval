<template>
  <div>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-speedometer" size="xl" class="mt-1" />
        &nbsp;
        <span class="h4">KPI's</span>
        <div class="card-header-actions">
          <CButton @click="editModaladdCandidato = true" color="primary" size="sm" block>
            <CIcon :content="$options.plusIcon" /> Agregar candidato
          </CButton>
          <CButton @click="editModaladdVacante = true" color="success" size="sm" block>
            <CIcon :content="$options.plusIcon" /> Agregar vacante
          </CButton>
        </div>
      </CCardHeader>
      <CTabs :active-tab.sync="activeTab">

        <CTab>
          <template slot="title">
            <CIcon :name="activeTab === 1 ? 'cil-folder-open' : 'cil-folder'" /> Candidatos
          </template>
          <CRow>
            <CCol>&nbsp;</CCol>
          </CRow>
          <CCardBody>
            <CDataTable :items="items" :fields="fields" :tableFilter="{
              placeholder: $t('tables.filter.placeholder'),
              label: $t('tables.filter.label') + ':',
              lazy: true,
            }" :itemsPerPageSelect="{ label: $t('tables.pageSelect') + ':' }" :noItemsView="{
  noResults: $t('tables.itemsView.noResults'),
  noItems: $t('tables.itemsView.noItems'),
}" :items-per-page="15" hover columnFilter sorter pagination outlined size="sm" :loading="loading">
              <template #show_details="{ item }">
                <td class="py-2">
                  <CButton color="success" variant="outline" square size="sm" @click="getCandidato(item.id)">
                    Ver candidato
                  </CButton>
                </td>
              </template>
            </CDataTable>
          </CCardBody>
        </CTab>

        <CTab>
          <template slot="title">
            <CIcon :name="activeTab === 1 ? 'cil-folder-open' : 'cil-folder'" /> Vacantes
          </template>
          <CRow>
            <CCol>&nbsp;</CCol>
          </CRow>
          <CCardBody>
            <CDataTable :items="items2" :fields="fields2" :tableFilter="{
              placeholder: $t('tables.filter.placeholder'),
              label: $t('tables.filter.label') + ':',
              lazy: true,
            }" :itemsPerPageSelect="{ label: $t('tables.pageSelect') + ':' }" :noItemsView="{
  noResults: $t('tables.itemsView.noResults'),
  noItems: $t('tables.itemsView.noItems'),
}" :items-per-page="15" hover columnFilter sorter pagination outlined size="sm" :loading="loading">
              <template #show_details="{ item }">
                <td class="py-2" v-if="(item.sucursal.city_id == 1 && item.dias < 23 )" style="background-color:#00C900">
                  <CButton color=#00C900 square size="sm" @click="getVacante(item.id)">
                    Ver vacante
                  </CButton>
                </td>
                <td class="py-2" v-if="(item.sucursal.city_id == 1 && item.dias > 22 && item.dias < 31 )" style="background-color:#FFFF00">
                  <CButton color=#FFFF00 square size="sm" @click="getVacante(item.id)">
                    Ver vacante
                  </CButton>
                </td>
                <td class="py-2" v-if="(item.sucursal.city_id == 1 && item.dias > 30)" style="background-color:#FF0000">
                  <CButton color=#FF0000 square size="sm" @click="getVacante(item.id)">
                    Ver vacante
                  </CButton>
                </td>
                <td class="py-2" v-if="(item.sucursal.city_id !== 1 && item.dias < 49 )" style="background-color:#00C900">
                  <CButton color=#00C900 square size="sm" @click="getVacante(item.id)">
                    Ver vacante
                  </CButton>
                </td>
                <td class="py-2" v-if="(item.sucursal.city_id !== 1 && item.dias > 48 && item.dias < 61 )" style="background-color:#FFFF00">
                  <CButton color=#FFFF00 square size="sm" @click="getVacante(item.id)">
                    Ver vacante
                  </CButton>
                </td>
                <td class="py-2" v-if="(item.sucursal.city_id !== 1 && item.dias > 60)" style="background-color:#FF0000">
                  <CButton color=#FF0000 square size="sm" @click="getVacante(item.id)">
                    Ver vacante
                  </CButton>
                </td>
                <!-- <td class="py-2" v-if="(item.sucursal.city_id == 1)" style="background-color:#FF5100">
                  <CButton color="success" variant="outline" square size="sm" @click="getVacante(item.id)">
                    Ver vacante
                  </CButton>
                </td> -->
              </template>
            </CDataTable>
          </CCardBody>
        </CTab>

        <CTab>
          <template slot="title">
            <CIcon :name="activeTab === 1 ? 'cil-folder-open' : 'cil-folder'" /> Historial de Candidatos
          </template>
          <CRow>
            <CCol>&nbsp;</CCol>
          </CRow>
          <CCardBody>
            <CDataTable :items="items3" :fields="fields" :tableFilter="{
              placeholder: $t('tables.filter.placeholder'),
              label: $t('tables.filter.label') + ':',
              lazy: true,
            }" :itemsPerPageSelect="{ label: $t('tables.pageSelect') + ':' }" :noItemsView="{
  noResults: $t('tables.itemsView.noResults'),
  noItems: $t('tables.itemsView.noItems'),
}" :items-per-page="15" hover columnFilter sorter pagination outlined size="sm" :loading="loading">
              <template #show_details="{ item }">
                <td class="py-2">
                  <CButton color="success" variant="outline" square size="sm" @click="getCandidato(item.id)">
                    Ver candidato
                  </CButton>
                </td>
              </template>
            </CDataTable>
          </CCardBody>
        </CTab>

        <CTab>
          <template slot="title">
            <CIcon :name="activeTab === 1 ? 'cil-folder-open' : 'cil-folder'" /> Historial de Vacantes
          </template>
          <CRow>
            <CCol>&nbsp;</CCol>
          </CRow>
          <CCardBody>
            <CDataTable :items="items4" :fields="fields2" :tableFilter="{
              placeholder: $t('tables.filter.placeholder'),
              label: $t('tables.filter.label') + ':',
              lazy: true,
            }" :itemsPerPageSelect="{ label: $t('tables.pageSelect') + ':' }" :noItemsView="{
  noResults: $t('tables.itemsView.noResults'),
  noItems: $t('tables.itemsView.noItems'),
}" :items-per-page="15" hover columnFilter sorter pagination outlined size="sm" :loading="loading">
              <template #show_details="{ item }">
                <td class="py-2">
                  <CButton color="success" variant="outline" square size="sm" @click="getVacante(item.id)">
                    Ver vacante
                  </CButton>
                </td>
              </template>
            </CDataTable>
          </CCardBody>
        </CTab>

        <CTab>
          <template slot="title">
            <CIcon :name="activeTab === 1 ? 'cil-folder-open' : 'cil-folder'" /> Solicitudes de personal
          </template>
          <CRow>
            <CCol>&nbsp;</CCol>
          </CRow>
          <CCardBody>
            <CDataTable :items="items5" :fields="fields3" :tableFilter="{
              placeholder: $t('tables.filter.placeholder'),
              label: $t('tables.filter.label') + ':',
              lazy: true,
            }" :itemsPerPageSelect="{ label: $t('tables.pageSelect') + ':' }" :noItemsView="{
  noResults: $t('tables.itemsView.noResults'),
  noItems: $t('tables.itemsView.noItems'),
}" :items-per-page="15" hover columnFilter sorter pagination outlined size="sm" :loading="loading">
              <template #show_details="{ item }">
                <td class="py-2">
                  <CButton color="success" variant="outline" square size="sm" @click="getSolicitud(item.id)">
                    Ver solicitud
                  </CButton>
                </td>
              </template>
            </CDataTable>
          </CCardBody>
        </CTab>

        <!-- -------------------------------Vacante-------------------------------------------------- -->
        <CModal :centered="true" :entered="true" title="KPI's Vacantes" size="xl" :show.sync="editModaladdVacante">
          <div slot="footer">
            <CCol sm="6">
              <CButton @click="addVacante(), editModaladdVacante = false" color="success" variant="outline"> Guardar
              </CButton>
            </CCol>
          </div>
          <h3 class="text-center">KPI's - VACANTES</h3>
          <p></p>
          <table class="table">
            <tbody width="100%">
              <tr>
                <th width="25%">
                  <CInput :value.sync="Fechahoy" label="Fecha:" placeholder="Ingrese fecha" type="date" disabled />
                </th>
                <th width="75%">
                  <CInput :value.sync="nombreVacante" label="Nombre de la vacante:"
                    placeholder="Ingrese nombre de la vacante" />
                </th>
              </tr>
              <tr>
                <th width="50%">
                  <CSelect :value.sync="departamento" label="Departamento:" placeholder="Ingrese departamento"
                    :options="departamentos" />
                </th>
                <th width="50%">
                  <CSelect :value.sync="sucursal" label="Sucursal:" placeholder="Ingrese sucursal"
                    :options="sucursales" />
                </th>
              </tr>
            </tbody>
          </table>
        </CModal>

        <!-- -------------------------------Candidatos-------------------------------------------------- -->
        <CModal :centered="true" title="KPI's Candidatos" size="lg" :show.sync="editModaladdCandidato"
          @update:show="closeModal">
          <h3 class="text-center">KPI's - Candidatos</h3>
          <p></p>
          <CForm autocomplete="off">
            <CRow>
              <CCol sm="4">
                <CInput :value.sync="Fechahoy" label="Fecha:" placeholder="Ingrese fecha" type="date" disabled />
              </CCol>
              <CCol sm="8">
                <CInput :value.sync="nombreCandidato" label="Nombre completo" placeholder="Nombre" />
              </CCol>
              <CCol sm="4">
                <CInput :value.sync="telefono" label="Teléfono" placeholder="Teléfono" />
              </CCol>
              <CCol sm="4">
                <CSelect :value.sync="departamento" label="Departamento" placeholder="Selecciona un Departamento"
                  :options="departamentos" />
              </CCol>
              <CCol sm="4">
                <CSelect :value.sync="puesto" :plain="true" :options="puestos" label="Puesto"
                  placeholder="Selecciona un Puesto" />
              </CCol>
              <CCol sm="4">
                <CSelect :value.sync="sucursal" :plain="true" label="Sucursal" :options="sucursales"
                  placeholder="Selecciona una Sucursal" />
              </CCol>
              <CCol sm="4">
                <CSelect :value.sync="plataforma" :plain="true" label="Plataforma" :options="plataformas"
                  placeholder="Selecciona una Plataforma" />
              </CCol>
            </CRow>
          </CForm>
          <div slot="footer">
            <CButton @click="addCandidato(), editModaladdCandidato = false" color="success" variant="outline"> Guardar
            </CButton>
          </div>
        </CModal>

        <!-- -------------------------------get Candidatos-------------------------------------------------- -->
        <CModal :centered="true" title="KPI's Candidatos" size="lg" :show.sync="ModalCandidato"
          @update:show="closeModal">
          <h3 class="text-center">KPI's - <b>{{ candidato.nombre }}</b></h3>
          <p></p>
          <CForm autocomplete="off">
            <CRow>
              <CCol sm="4">
                <CInput :value.sync="candidato.fecha" label="Fecha:" placeholder="Ingrese fecha" disabled />
              </CCol>
              <CCol sm="8">
                <CInput :value.sync="candidato.nombre" label="Nombre completo" placeholder="Nombre" />
              </CCol>
              <CCol sm="4">
                <CInput :value.sync="candidato.telefono" label="Teléfono" placeholder="Teléfono" />
              </CCol>
              <CCol sm="4">
                <CSelect :value.sync="candidato.departamento" label="Departamento"
                  placeholder="Selecciona un Departamento" :options="departamentos" />
              </CCol>
              <CCol sm="4">
                <CSelect :value.sync="candidato.puesto" :plain="true" :options="puestos" label="Puesto"
                  placeholder="Selecciona un Puesto" />
              </CCol>
              <CCol sm="4">
                <CSelect :value.sync="candidato.sucursal" :plain="true" label="Sucursal" :options="sucursales"
                  placeholder="Selecciona una Sucursal" />
              </CCol>
              <CCol sm="4">
                <CSelect :value.sync="candidato.proceso" :plain="true" label="Estatus" :options="proceso"
                  placeholder="Selecciona Activo/Inactivo" />
              </CCol>
              <CCol sm="4">
                <CSelect :value.sync="candidato.plataforma" :plain="true" label="Plataforma" :options="plataformas"
                  placeholder="Selecciona una Plataforma" />
              </CCol>
              <CCol sm="12">
                <CTextarea :value.sync="candidato.comentarios" label="Comentarios"
                  placeholder="Escribe tus comentarios del candidato" rows="3" />
              </CCol>
              <CCol sm="4">
                <CSelect :value.sync="candidato.estatus" :plain="true" label="Activo/Inactivo" :options="estatus"
                  placeholder="Selecciona Activo/Inactivo" />
              </CCol>
            </CRow>
          </CForm>
          <div slot="footer">
            <CButton @click="updateContratacion(), ModalCandidato = false" color="danger" variant="outline"> Contratado
              & Cerrar vacante
            </CButton>
            <CButton @click="updateCandidato(), ModalCandidato = false" color="primary" variant="outline"> Modificar
            </CButton>
          </div>
        </CModal>

        <!-- -------------------------------get Vacante-------------------------------------------------- -->
        <CModal :centered="true" title="KPI's Vacantes" size="lg" :show.sync="ModalVacantes" @update:show="closeModal">
          <h3 class="text-center">KPI's - <b>{{ vacante.nombre }}</b></h3>
          <p></p>
          <CForm autocomplete="on">
            <CRow>
              <CCol sm="4">
                <CInput :value.sync="vacante.fecha" label="Fecha:" placeholder="Ingrese fecha" disabled />
              </CCol>
              <CCol sm="8">
                <CInput :value.sync="vacante.nombre" label="Nombre de la vacante" placeholder="Nombre de la vacante" />
              </CCol>
              <CCol sm="4">
                <CSelect :value.sync="vacante.departamento" label="Departamento"
                  placeholder="Selecciona un Departamento" :options="departamentos" />
              </CCol>

              <CCol sm="4">
                <CSelect :value.sync="vacante.sucursal" :plain="true" label="Sucursal" :options="sucursales"
                  placeholder="Selecciona una Sucursal" />
              </CCol>
              <CCol sm="4">
                <CInput :value.sync="vacante.descartados" label="Numero de descartados"
                  placeholder="Numero de descartados" />
              </CCol>
              <CCol sm="12">
                <CTextarea :value.sync="vacante.comentarios" label="Comentarios"
                  placeholder="Escribe tus comentarios del candidato" rows="3" />
              </CCol>
              <CCol sm="4">
                <CSelect :value.sync="vacante.estatus" :plain="true" label="Activo/Inactivo" :options="estatus"
                  placeholder="Selecciona Activo/Inactivo" />
              </CCol>
              <CCol sm="8"><br><CButton style="float: right;" :href="linkkpi" color="primary">
           Imprimir KPI
          </CButton></CCol>
              <p></p>
              <CCol sm="12">
                <p class="h4">Postulados para la vacante <b>{{ vacante.nombre }}</b></p>
                <CChartBar style="height: 300px; background-color:rgba(58, 116, 165, 0.09);" :datasets="vacantesGrafico"
                  :labels="labels" :options="{
                    maintainAspectRatio: false,
                  }" />
              </CCol>
              <p></p>
              <p></p>
              <CCol sm="12">
                <p class="h4">Candidatos para la vacante <b>{{ vacante.nombre }}</b></p>
                <CChartBar style="height: 300px; background-color:rgba(58, 116, 165, 0.09);"
                  :datasets="vacantesGrafico2" :labels="labels2" :options="{
                    maintainAspectRatio: false,
                  }" />
              </CCol>
              <p></p>
            </CRow>
          </CForm>
          <div slot="footer">
            <CButton @click="updateVacante(), ModalVacantes = false" color="danger" variant="outline"> Modificar
            </CButton>
          </div>
        </CModal>

        <!-- -------------------------------Solicitud-------------------------------------------------- -->
        <CModal :entered="true" title="KPI's Solicitudes de personal" size="xl" :show.sync="ModalSolicitudPersonal">
          <div slot="footer">
            <CCol sm="6">
              <CButton @click="addVacanteSolicitud(), ModalSolicitudPersonal = false" color="success" variant="outline">
                Crear vacante
              </CButton>
            </CCol>
          </div>
          <CForm autocomplete="on">
            <!-- ---------------SOLICITANTE------------------------- -->
            <CRow class="bg-success p-2 text-white">
              <CCol sm="12">
              <h3 class="text-center">KPI's - Solicitud de personal</h3>
              </CCol>
              <CCol sm="3">
                <CInput label="Fecha:" :value.sync="solicitante.fecha" placeholder="Ingrese fecha" disabled />
              </CCol>
              <CCol sm="5">
                <CInput label="Nombre del solicitante" :value.sync="solicitante.nombre"
                  placeholder="Nombre del solicitante" disabled />
              </CCol>
              <CCol sm="4">
                <CInput label="Cargo del solicitante" :value.sync="solicitante.puesto"
                  placeholder="Cargo del solicitante" disabled />
              </CCol>
              <p></p>
            </CRow>
            <!-- ---------------ESPECIFICACIONES------------------------- -->
            <CRow>
              <br />
              <CCol sm="12">
              <h3 class="text-center">Especificaciones de la Requisición</h3>
            </CCol>
              <CCol sm="3">
                <CSelect :value.sync="especificaciones.tipo" :plain="true" label="Requisición" disabled
                  :options="requerimientos" placeholder="Selecciona una opcion" />
              </CCol>
              <CCol sm="4">
                <CSelect :value.sync="especificaciones.motivo" :plain="true" label="Motivo" :options="motivo" disabled
                  placeholder="Selecciona una motivo" />
              </CCol>
              <CCol sm="5">
                <CInput label="Nombre de la persona a sustituir" :value.sync="especificaciones.personaSustituir"
                  placeholder="Nombre de la persona a sustituir" disabled />
              </CCol>
              <p></p>
            </CRow>
            <!-- ---------------DEFINICION------------------------- -->
            <CRow>
              <br />
              <CCol sm="12">
              <h3 class="text-center">Definición del Puesto</h3>
            </CCol>
              <CCol sm="4">
                <CSelect :value.sync="definicion.tipo" :plain="true" label="Tipo de puesto" :options="puesto" disabled
                  placeholder="Selecciona una opcion" />
              </CCol>
              <CCol sm="4">
                <CInput :value.sync="definicion.nombre" label="Nombre del puesto" placeholder="Nombre del puesto"
                  disabled />
              </CCol>
              <CCol sm="4">
                <CSelect :value.sync="definicion.departamento" :plain="true" label="Departamento del puesto" disabled
                  :options="departamentos" placeholder="Selecciona una opcion" />
              </CCol>
              <CCol sm="4">
                <CSelect :value.sync="definicion.ubicacion" :plain="true" label="Ubicacion fisica del puesto" disabled
                  :options="sucursal" placeholder="Selecciona una Sucursal" />
              </CCol>
              <CCol sm="8">
                <CInput :value.sync="definicion.horario" label="Horario de la jornada laboral" disabled
                  placeholder="Horario de la jornada laboral" />
              </CCol>
              <CCol sm="12">
                <CTextarea :value.sync="definicion.funciones" label="Funciones generales del puesto" disabled
                  placeholder="Funciones generales del puesto" rows="2" />
              </CCol>
              <p></p>
            </CRow>
            <!-- ---------------PERFIL------------------------- -->
            <CRow>
              <br />
              <CCol sm="12">
              <h3 class="text-center">Perfil Requerido (Conocimientos Generales)</h3>
            </CCol>
              <CCol sm="4">
                <CSelect :value.sync="perfil.escolaridad" :plain="true" label="Escolaridad o grado academico"
                  :options="escolaridad" placeholder="Escolaridad o grado academico" disabled />
              </CCol>
              <CCol sm="8">
                <CInput :value.sync="perfil.idiomas" label="Dominio de idiomas" placeholder="Dominio de idiomas"
                  disabled />
              </CCol>
              <CCol sm="12">
                <CTextarea :value.sync="perfil.equipo" label="Manejo de equipo y/o maquinaria" disabled
                  placeholder="Manejo de equipo y/o maquinaria" rows="2" />
              </CCol>
              <CCol sm="12">
                <CTextarea :value.sync="perfil.sistema" label="Manejo de sistemas y/o programas electronicos" disabled
                  placeholder="Manejo de sistemas y/o programas electronicos" rows="2" />
              </CCol>
              <CCol sm="6">
                <CInput :value.sync="perfil.experiencia" label="Experiencia" placeholder="Experiencia en funciones"
                  disabled />
              </CCol>
              <CCol sm="6">
                <CSelect :value.sync="perfil.sexo" :plain="true" label="Sexo" :options="sexo" placeholder="Sexo"
                  disabled />
              </CCol>
              <CCol sm="6">
                <CSelect :value.sync="perfil.estadoCivil" :plain="true" label="Estado civil" :options="estadoCivil"
                  disabled placeholder="Estado civil" />
              </CCol>
              <CCol sm="6">
                <CInput :value.sync="perfil.edad" label="Rango de edad" placeholder="Rango de edad" disabled />
              </CCol>
              <p></p>
            </CRow>
            <!-- ---------------HABILIDADES------------------------- -->
            <CRow>
              <br />
              <CCol sm="12">
              <h3 class="text-center">HABILIDADES REQUERIDAS</h3>
            </CCol>

              <CCol sm="4">
                <label><b>ANALISIS</b></label>
                <CInputCheckbox id="habilidades.comprension" :checked=habilidades.comprension
                  label="Comprensión verbal/escrita" disabled />
                <CInputCheckbox id="habilidades.seguimiento" :checked=habilidades.seguimiento
                  label="Seguimiento de instrucciones/procedimientos" disabled />
                <CInputCheckbox id="habilidades.objetividad" :checked=habilidades.objetividad
                  label="Objetividad en el manejo de información" disabled />

              </CCol>
              <CCol sm="4">
                <label><b>LIDERAZGO</b></label>
                <CInputCheckbox id="habilidades.manejo" :checked=habilidades.manejo label="Manejo de personal"
                  disabled />
                <CInputCheckbox id="habilidades.negociacion" :checked=habilidades.negociacion label="Negociación"
                  disabled />
                <CInputCheckbox id="habilidades.decisiones" :checked=habilidades.decisiones label="Toma de decisiones"
                  disabled />
                <CInputCheckbox id="habilidades.poder" :checked=habilidades.poder
                  label="Poder personal (lograr que sucedan las cosas)" disabled />

              </CCol>
              <CCol sm="4">
                <label><b>COMUNICACION</b></label>
                <CInputCheckbox id="habilidades.palabra" :checked=habilidades.palabra label="Facilidad de palabra"
                  disabled />
                <CInputCheckbox id="habilidades.dominio" :checked=habilidades.dominio label="Dominio de público"
                  disabled />
                <CInputCheckbox id="habilidades.asertividad" :checked=habilidades.asertividad label="Asertividad"
                  disabled />

              </CCol>
              <CCol sm="12">
              <label><b>PLANEACION / ORGANIZACION</b></label>
              </CCol>
              <CCol sm="4">
                <CInputCheckbox id="habilidades.iniciativa" :checked=habilidades.iniciativa label="Iniciativa"
                  disabled />
                <CInputCheckbox id="habilidades.creatividad" :checked=habilidades.creatividad label="Creatividad"
                  disabled />
                <CInputCheckbox id="habilidades.resultados" :checked=habilidades.resultados
                  label="Orientado a resultados" disabled />

              </CCol>
              <CCol sm="4">
                <CInputCheckbox id="habilidades.adaptable" :checked=habilidades.adaptable label="Adaptable a cambios"
                  disabled />
                <CInputCheckbox id="habilidades.logico" :checked=habilidades.logico
                  label="Clasificación y orden lógico de información" disabled />
                <CInputCheckbox id="habilidades.concentracion" :checked=habilidades.concentracion label="Concentración"
                  disabled />

              </CCol>
              <CCol sm="4">
                <CInputCheckbox id="habilidades.equipo" :checked=habilidades.equipo label="Trabajo en equipo"
                  disabled />
                <CInputCheckbox id="habilidades.estres" :checked=habilidades.estres label="Manejo de estrés laboral"
                  disabled />
              </CCol>
              <p></p>
            </CRow>
            <!-- ---------------ACTITUDES------------------------- -->
            <CRow>
              <br />
              <CCol sm="12">
              <h3 class="text-center">ACTITUDES REQUERIDAS</h3>
              </CCol>
              <CCol sm="12">
              <label><b>ACTITUDES</b></label>
              </CCol>
              <CCol sm="4">
                <CInputCheckbox id="actitudes.responsable" :checked=actitudes.responsable label="Responsable"
                  disabled />
                <CInputCheckbox id="actitudes.empatico" :checked=actitudes.empatico label="Empático" disabled />
              </CCol>
              <CCol sm="4">
                <CInputCheckbox id="actitudes.emprendedor" :checked=actitudes.emprendedor label="Emprendedor"
                  disabled />
                <CInputCheckbox id="actitudes.colaborador" :checked=actitudes.colaborador label="Colaborador"
                  disabled />
              </CCol>
              <CCol sm="4">
                <CInputCheckbox id="actitudes.normas" :checked=actitudes.normas label="Apego a normas" disabled />
              </CCol>
              <CCol sm="12">
                <CTextarea label="Otras habilidades o actitudes requeridas" :value.sync="actitudes.comentarios"
                  placeholder="Otras habilidades o actitudes requeridas" rows="2" disabled />
              </CCol>
              <p></p>
            </CRow>
          </CForm>
        </CModal>

      </CTabs>
    </CCard>


  </div>
</template>
<script>
import {
  numeric,
  maxLength,
  minLength,
  email,
  required,
} from "../../utils/validators";
import { sameAs, not } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { requiredIf } from "@vuelidate/validators";
import { cilAddressBook, cilMoodGood, cilPlus } from "@coreui/icons";
import axios from "axios";
const fields = [
  { key: "id", label: "ID", _style: "min-width:50px;" },
  { key: "nombre", label: "Nombre completo", _style: "min-width:350px" },
  { key: "vacante_desc", label: "Vacante", _style: "min-width:200px" },
  { key: "sucursal_desc", label: "Sucursal", _style: "min-width:100px;" },
  { key: "estatus_desc", label: "Estatus", _style: "min-width:100px;" },
  { key: "show_details", label: "", _style: "width:1%", sorter: false, filter: false, },
];
const fields2 = [
  { key: "id", label: "ID", _style: "min-width:50px;" },
  { key: "nombre", label: "Vacante", _style: "min-width:200px" },
  { key: "sucursal_desc", label: "Sucursal", _style: "min-width:100px;" },
  { key: "estatus_desc", label: "Estatus", _style: "min-width:100px;" },
  { key: "dias", label: "Dias", _style: "min-width:50px;" },
  { key: "show_details", label: "", _style: "width:1%", sorter: false, filter: false, },
];
const fields3 = [
  { key: "id", label: "ID", _style: "min-width:50px;" },
  { key: "nombre_solicitante", label: "Solicitante", _style: "min-width:350px" },
  { key: "nombre_definicion", label: "Puesto solicitado", _style: "min-width:350px" },
  { key: "departamento_desc", label: "Departamento", _style: "min-width:100px;" },
  { key: "sucursal_desc", label: "Sucursal", _style: "min-width:100px;" },
  { key: "show_details", label: "", _style: "width:1%", sorter: false, filter: false, },
];

export default {
  name: "AdvancedTables",
  moodGood: cilMoodGood,
  plusIcon: cilPlus,
  data() {
    return {
      linkkpi:"",
      editModaladdVacante: false,
      editModaladdCandidato: false,
      ModalCandidato: false,
      ModalVacantes: false,
      ModalSolicitudPersonal: false,
      Fechahoy: "",
      nombreVacante: "",
      nombreCandidato: "",
      telefono: "",
      departamento: "",
      sucursal: "",
      puesto: "",
      plataforma: "",
      activeTab: 0,
      candidato: {
        id: "",
        fecha: "",
        nombre: "",
        telefono: "",
        puesto: "",
        sucursal: "",
        plataforma: "",
        proceso: "",
        departamento: "",
        proceso: "",
        estatus: "",
        comentarios: "",
      },
      vacante: {
        id: "",
        fecha: "",
        nombre: "",
        sucursal: "",
        departamento: "",
        estatus: "",
        descartados: "",
        comentarios: "",
        vacantesGrafico: ""
      },
      solicitante: {
        fecha: "",
        nombre: "",
        puesto: "",
      },
      especificaciones: {
        tipo: "",
        motivo: "",
        personaSustituir: "",
      },
      definicion: {
        tipo: "",
        nombre: "",
        departamento: "",
        ubicacion: "",
        horario: "",
        funciones: "",
      },
      perfil: {
        escolaridad: "",
        idiomas: "",
        equipo: "",
        sistema: "",
        experiencia: "",
        sexo: "",
        estadoCivil: "",
        edad: "",
      },
      habilidades: {
        comprension: "",
        seguimiento: "",
        objetividad: "",
        manejo: "",
        negociacion: "",
        decisiones: "",
        poder: "",
        palabra: "",
        dominio: "",
        asertividad: "",
        iniciativa: "",
        creatividad: "",
        resultados: "",
        adaptable: "",
        logico: "",
        concentracion: "",
        equipo: "",
        estres: "",
      },
      actitudes: {
        responsable: "",
        empatico: "",
        emprendedor: "",
        colaborador: "",
        normas: "",
        comentarios: "",
      },
      items: [],
      items2: [],
      items3: [],
      items4: [],
      items5: [],
      departamentos: [],
      sucursales: [],
      puestos: [],
      plataformas: [],
      estatus: [],
      proceso: [],
      requerimientos: [],
      motivo: [],
      puesto: [],
      escolaridad: [],
      sexo: [],
      estadoCivil: [],
      labels: [],
      labels2: [],
      idx: 0,
      isTouched: false,
      loading: true,
      user: this.$options.User,
      setPassword: true,
      action: this.$t("titles.create"),
      fields,
      fields2,
      fields3,
      details: [],
      collapseDuration: 0,
      comentarios: [],
      comentarios2: [],
      comentarios3: [],
      vacantesGrafico: [
        {
          data: [],
          fill: true,
          tension: 0.15,
          borderColor: "rgba(118, 180, 81, 1)", //118 , 180 , 81
          borderWidth: 4,
          label: "Candidatos",
        },
      ],
      vacantesGrafico2: [
        {
          data: [],
          fill: true,
          tension: 0.15,
          borderColor: "rgba(118, 180, 81, 1)", //118 , 180 , 81
          borderWidth: 4,
          label: "Candidatos",
        },
      ],
    };
  },
  methods: {
    index() {
      let self = this;
      axios
        .get(
          this.$apiAdress +
          "/api/kpi?token=" +
          localStorage.getItem("api_token")
        )
        .then(function (response) {
          console.log(response.data);
          self.items = response.data.candidatos;
          self.items2 = response.data.vacantes;
          self.items3 = response.data.historialcandidatos;
          self.items4 = response.data.historialvacantes;
          self.items5 = response.data.solicitudes;
          self.Fechahoy = response.data.Fechahoy;
          self.departamentos = response.data.departamentos;
          self.sucursales = response.data.sucursal;
          self.puestos = response.data.puestos;
          self.plataformas = response.data.plataformas;
          self.estatus = response.data.estatus;
          self.proceso = response.data.proceso;

          self.requerimientos = response.data.requerimientos;
          self.motivo = response.data.motivo;
          self.puesto = response.data.puesto;
          self.escolaridad = response.data.escolaridad;
          self.sexo = response.data.sexo;
          self.estadoCivil = response.data.estadoCivil;

          self.formatData();
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    async addCandidato() {
      let self = this;
      //this.v$.$touch();
      console.log(self.v$);
      //if (self.v$.$error) return;
      let isUpdate = await self
        .$swal({
          title: self.$t("¿Esta seguro de agregar este candidato?"),
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
            "/api/kpi/addCandidato" +
            "?token=" +
            localStorage.getItem("api_token"), {
            nombreCandidato: self.nombreCandidato,
            telefono: self.telefono,
            departamento: self.departamento,
            puesto: self.puesto,
            sucursal: self.sucursal,
            plataforma: self.plataforma,
          })
          .then(function (response) {
            console.log(response.data);
            self.nombreCandidato = "";
            self.telefono = "";
            self.departamento = "";
            self.puesto = "";
            self.sucursal = "";
            self.$toast.success(self.$t("messages.insert"));
          })
          .catch(function (error) {
            self.nombreCandidato = "";
            self.telefono = "";
            self.departamento = "";
            self.puesto = "";
            self.sucursal = "";
            if (error.response.status == 500) {
              self.$router.push({ path: "/kpi/kpi" });
              self.$toast.error(self.$t("messages.error"));
            }
          });
      }
    },
    async addVacante() {
      let self = this;
      //this.v$.$touch();
      console.log(self.v$);
      //if (self.v$.$error) return;
      let isUpdate = await self
        .$swal({
          title: self.$t("¿Esta seguro de crear esta vacante?"),
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
            "/api/kpi/addVacante" +
            "?token=" +
            localStorage.getItem("api_token"), {
            nombreVacante: self.nombreVacante,
            departamento: self.departamento,
            sucursal: self.sucursal,
          })
          .then(function (response) {
            console.log(response.data);
            self.nombreVacante = "";
            self.departamento = "";
            self.sucursal = "";
            self.$toast.success(self.$t("messages.insert"));
          })
          .catch(function (error) {
            self.nombreVacante = "";
            self.departamento = "";
            self.sucursal = "";
            if (error.response.status == 500) {
              self.$router.push({ path: "/kpi/kpi" });
              self.$toast.error(self.$t("messages.error"));
            } if (error.response.status == 401) {
              self.$toast.error(self.$t("Ya realizaste esta Evaluación"));
            }
          });
      }
    },
    async addVacanteSolicitud() {
      let self = this;
      //this.v$.$touch();
      console.log(self.v$);
      //if (self.v$.$error) return;
      let isUpdate = await self
        .$swal({
          title: self.$t("¿Esta seguro de crear esta vacante?"),
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
            "/api/kpi/addVacante" +
            "?token=" +
            localStorage.getItem("api_token"), {
            nombreVacante: self.definicion.nombre,
            departamento: self.definicion.departamento,
            sucursal: self.definicion.ubicacion,
          })
          .then(function (response) {
            console.log(response.data);
            self.nombreVacante = "";
            self.departamento = "";
            self.sucursal = "";
            self.$toast.success(self.$t("messages.insert"));
          })
          .catch(function (error) {
            self.nombreVacante = "";
            self.departamento = "";
            self.sucursal = "";
            if (error.response.status == 500) {
              self.$router.push({ path: "/kpi/kpi" });
              self.$toast.error(self.$t("messages.error"));
            } if (error.response.status == 401) {
              self.$toast.error(self.$t("Ya realizaste esta Evaluación"));
            }
          });
      }
    },
    getCandidato(id) {
      let self = this;
      console.log(id);
      axios
        .get(
          this.$apiAdress +
          "/api/kpi/getCandidato/" + id + "?token=" +
          localStorage.getItem("api_token")
        )
        .then(function (response) {
          console.log(response.data);
          self.candidato.id = response.data.candidato.id;
          self.candidato.fecha = response.data.candidato.fecha;
          self.candidato.nombre = response.data.candidato.nombre;
          self.candidato.telefono = response.data.candidato.telefono;
          self.candidato.puesto = response.data.candidato.vacante;
          self.candidato.sucursal = response.data.candidato.sucursal_id;
          self.candidato.plataforma = response.data.candidato.plataforma;
          self.candidato.proceso = response.data.candidato.proceso;
          self.candidato.departamento = response.data.candidato.departamento;
          self.candidato.proceso = response.data.candidato.estatus_id;
          self.candidato.estatus = response.data.candidato.estatus;
          self.candidato.comentarios = response.data.candidato.comentarios;
          self.isTouched = true;
          self.isInvalid;
          self.ModalCandidato = true;
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    getVacante(id) {
      let self = this;
      axios
        .get(
          this.$apiAdress +
          "/api/kpi/getVacante/" + id + "?token=" +
          localStorage.getItem("api_token")
        )
        .then(function (response) {
          console.log(response.data);
          self.linkkpi = "/api/kpi/imprimir/"+ id +"/" + "?token=" + localStorage.getItem("api_token");
          self.vacante.id = response.data.vacantes.id;
          self.vacante.fecha = response.data.vacantes.fecha;
          self.vacante.nombre = response.data.vacantes.nombre;
          self.vacante.sucursal = response.data.vacantes.sucursal_id;
          self.vacante.departamento = response.data.vacantes.departamento;
          self.vacante.estatus = response.data.vacantes.estatus;
          self.vacante.descartados = response.data.vacantes.descartados;
          self.vacante.comentarios = response.data.vacantes.comentarios;
          self.labels = response.data.labels;
          self.labels2 = response.data.labels2;
          self.vacantesGrafico[0].data = response.data.vacantesGrafico;
          self.vacantesGrafico2[0].data = response.data.vacantesGrafico2;
          self.isTouched = true;
          self.isInvalid;
          self.ModalVacantes = true;
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    async updateCandidato() {
      let self = this;
      //this.v$.$touch();
      console.log(self.v$);
      //if (self.v$.$error) return;
      let isUpdate = await self
        .$swal({
          title: self.$t("¿Esta seguro de editar este candidato?"),
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
            "/api/kpi/updateCandidato" +
            "?token=" +
            localStorage.getItem("api_token"), {
            nombre: self.candidato.nombre,
            telefono: self.candidato.telefono,
            departamento: self.candidato.departamento,
            puesto: self.candidato.puesto,
            sucursal: self.candidato.sucursal,
            proceso: self.candidato.proceso,
            estatus: self.candidato.estatus,
            plataforma: self.candidato.plataforma,
            comentarios: self.candidato.comentarios,
            id: self.candidato.id,
          })
          .then(function (response) {
            console.log(response.data);
            self.candidato.nombre = "";
            self.candidato.telefono = "";
            self.candidato.departamento = "";
            self.candidato.puesto = "";
            self.candidato.sucursal = "";
            self.candidato.proceso = "";
            self.candidato.estatus = "";
            self.candidato.plataforma = "";
            self.candidato.id = "";
            self.$toast.success(self.$t("messages.insert"));
          })
          .catch(function (error) {
            self.candidato.nombre = "";
            self.candidato.telefono = "";
            self.candidato.departamento = "";
            self.candidato.puesto = "";
            self.candidato.sucursal = "";
            self.candidato.proceso = "";
            self.candidato.estatus = "";
            self.candidato.plataforma = "";
            if (error.response.status == 500) {
              self.$router.push({ path: "/kpi/kpi" });
              self.$toast.error(self.$t("messages.error"));
            }
          });
      }
    },
    async updateContratacion() {
      let self = this;
      //this.v$.$touch();
      console.log(self.v$);
      //if (self.v$.$error) return;
      let isUpdate = await self
        .$swal({
          title: self.$t("¿Esta seguro de contratar este candidato y cerrar la vacante?"),
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
            "/api/kpi/updateContratacion" +
            "?token=" +
            localStorage.getItem("api_token"), {
            nombre: self.candidato.nombre,
            telefono: self.candidato.telefono,
            departamento: self.candidato.departamento,
            puesto: self.candidato.puesto,
            sucursal: self.candidato.sucursal,
            proceso: self.candidato.proceso,
            estatus: self.candidato.estatus,
            plataforma: self.candidato.plataforma,
            comentarios: self.candidato.comentarios,
            id: self.candidato.id,
          })
          .then(function (response) {
            console.log(response.data);
            self.candidato.nombre = "";
            self.candidato.telefono = "";
            self.candidato.departamento = "";
            self.candidato.puesto = "";
            self.candidato.sucursal = "";
            self.candidato.proceso = "";
            self.candidato.estatus = "";
            self.candidato.plataforma = "";
            self.candidato.id = "";
            self.$toast.success(self.$t("messages.insert"));
          })
          .catch(function (error) {
            self.candidato.nombre = "";
            self.candidato.telefono = "";
            self.candidato.departamento = "";
            self.candidato.puesto = "";
            self.candidato.sucursal = "";
            self.candidato.proceso = "";
            self.candidato.estatus = "";
            self.candidato.plataforma = "";
            if (error.response.status == 500) {
              self.$router.push({ path: "/kpi/kpi" });
              self.$toast.error(self.$t("messages.error"));
            }
          });
      }
    },
    async updateVacante() {
      let self = this;
      //this.v$.$touch();
      console.log(self.v$);
      //if (self.v$.$error) return;
      let isUpdate = await self
        .$swal({
          title: self.$t("¿Esta seguro de editar esta vancante?"),
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
            "/api/kpi/updateVacante" +
            "?token=" +
            localStorage.getItem("api_token"), {
            id: self.vacante.id,
            fecha: self.vacante.fecha,
            nombre: self.vacante.nombre,
            sucursal: self.vacante.sucursal,
            departamento: self.vacante.departamento,
            estatus: self.vacante.estatus,
            descartados: self.vacante.descartados,
            comentarios: self.vacante.comentarios,
          })
          .then(function (response) {
            console.log(response.data);
            self.vacante.id = "";
            self.vacante.fecha = "";
            self.vacante.nombre = "";
            self.vacante.sucursal = "";
            self.vacante.departamento = "";
            self.vacante.estatus = "";
            self.vacante.descartados = "";
            self.$toast.success(self.$t("messages.insert"));
          })
          .catch(function (error) {
            self.vacante.fecha = "";
            self.vacante.nombre = "";
            self.vacante.sucursal = "";
            self.vacante.departamento = "";
            self.vacante.estatus = "";
            self.vacante.descartados = "";
            if (error.response.status == 500) {
              self.$router.push({ path: "/kpi/kpi" });
              self.$toast.error(self.$t("messages.error"));
            }
          });
      }
    },
    getSolicitud(id) {
      let self = this;
      console.log(id);
      axios
        .get(
          this.$apiAdress +
          "/api/kpi/getSolicitud/" + id + "?token=" +
          localStorage.getItem("api_token")
        )
        .then(function (response) {
          console.log(response.data);
          self.solicitante.fecha = response.data.solicitud.fecha;
          self.solicitante.nombre = response.data.solicitud.nombre_solicitante;
          self.solicitante.puesto = response.data.solicitud.puesto_solicitante;

          self.especificaciones.tipo = response.data.solicitud.tipo_especificaciones;
          self.especificaciones.motivo = response.data.solicitud.motivo_especificaciones;
          self.especificaciones.personaSustituir = response.data.solicitud.persona_sustituir;

          self.definicion.tipo = response.data.solicitud.tipo_definicion;
          self.definicion.nombre = response.data.solicitud.nombre_definicion;
          self.definicion.departamento = response.data.solicitud.departamento_definicion;
          self.definicion.ubicacion = response.data.solicitud.ubicacion_definicion;
          self.definicion.horario = response.data.solicitud.horario;
          self.definicion.funciones = response.data.solicitud.funciones;

          self.perfil.escolaridad = response.data.solicitud.escolaridad;
          self.perfil.idiomas = response.data.solicitud.idiomas;
          self.perfil.equipo = response.data.solicitud.perfil_equipo;
          self.perfil.sistema = response.data.solicitud.perfil_sistema;
          self.perfil.experiencia = response.data.solicitud.experiencia;
          self.perfil.sexo = response.data.solicitud.sexo;
          self.perfil.estadoCivil = response.data.solicitud.estadoCivil;
          self.perfil.edad = response.data.solicitud.edad;

          self.habilidades.comprension = response.data.solicitud.habilidades_comprension;
          self.habilidades.seguimiento = response.data.solicitud.habilidades_seguimiento;
          self.habilidades.objetividad = response.data.solicitud.habilidades_objetividad;
          self.habilidades.manejo = response.data.solicitud.habilidades_manejo;
          self.habilidades.negociacion = response.data.solicitud.habilidades_negociacion;
          self.habilidades.decisiones = response.data.solicitud.habilidades_decisiones;
          self.habilidades.poder = response.data.solicitud.habilidades_poder;
          self.habilidades.palabra = response.data.solicitud.habilidades_palabra;
          self.habilidades.dominio = response.data.solicitud.habilidades_dominio;
          self.habilidades.asertividad = response.data.solicitud.habilidades_asertividad;
          self.habilidades.iniciativa = response.data.solicitud.habilidades_iniciativa;
          self.habilidades.creatividad = response.data.solicitud.habilidades_creatividad;
          self.habilidades.resultados = response.data.solicitud.habilidades_resultados;
          self.habilidades.adaptable = response.data.solicitud.habilidades_adaptable;
          self.habilidades.logico = response.data.solicitud.habilidades_logico;
          self.habilidades.concentracion = response.data.solicitud.habilidades_concentracion;
          self.habilidades.equipo = response.data.solicitud.habilidades_equipo;
          self.habilidades.estres = response.data.solicitud.habilidades_estres;

          self.actitudes.responsable = response.data.solicitud.actitudes_responsable;
          self.actitudes.empatico = response.data.solicitud.actitudes_empatico;
          self.actitudes.emprendedor = response.data.solicitud.actitudes_emprendedor;
          self.actitudes.colaborador = response.data.solicitud.actitudes_colaborador;
          self.actitudes.normas = response.data.solicitud.actitudes_normas;
          self.actitudes.comentarios = response.data.solicitud.actitudes_comentarios;
          self.isTouched = true;
          self.isInvalid;
          self.ModalSolicitudPersonal = true;
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    async formatData() {
      let formatItems = await this.items.map((item) => {
        return {
          ...item,
          sucursal_desc: item.sucursal ? item.sucursal.name : "",
          estatus_desc: item.estatus ? item.estatus.text : "",
          vacante_desc: item.vacante ? item.vacante.nombre : "",
        };
      });
      let formatItems2 = await this.items2.map((item) => {
        return {
          ...item,
          dias: Math.floor((new Date().getTime() - new Date(item.fecha).getTime()) / (1000 * 60 * 60 * 24)),
          sucursal_desc: item.sucursal ? item.sucursal.name : "",
          estatus_desc: item.estatus ? item.estatus.text : "",
        };
      });
      let formatItems3 = await this.items3.map((item) => {
        return {
          ...item,
          sucursal_desc: item.sucursal ? item.sucursal.name : "",
          estatus_desc: item.estatus ? item.estatus.text : "",
          vacante_desc: item.vacante ? item.vacante.nombre : "",
        };
      });
      let formatItems4 = await this.items4.map((item) => {
        return {
          ...item,
          sucursal_desc: item.sucursal ? item.sucursal.name : "",
          estatus_desc: item.estatus ? item.estatus.text : "",
        };
      });
      let formatItems5 = await this.items5.map((item) => {
        return {
          ...item,
          sucursal_desc: item.ubicacion_definicion ? item.sucursal.name : "",
          departamento_desc: item.departamento_definicion ? item.departamento.text : "",
        };
      });
      this.items = formatItems;
      this.items2 = formatItems2;
      this.items3 = formatItems3;
      this.items4 = formatItems4;
      this.items5 = formatItems5;
      this.loading = false;
    },
    selectCheckbox(slug, code) {
      switch (slug) {
        case "setPassword":
          this.setPassword = !code;
          break;
      }
    },
    onChange(value) {
      this.user.areas_ventas = value;
      if (!value) this.user.areas_ventas = [];
      this.isInvalid;
    },
    onTouch() {
      this.isTouched = true;
    },
    closeModal(status, evt, accept) {
      let self = this;
      self.action = self.$t("titles.create");
      self.setPassword = true;
      self.$nextTick(() => {
        self.v$.$reset();
      });
      self.user = self.$options.User;
      self.editModal = false;
    },
    evenMoney(value) {
      if (value.unmasked) {
        // const formatted = value.unmasked.match(/\d+(\.\d+)?/g);
        // const formatted = value.unmasked.match(/(?=(?:\d{3})+(?:\.|$))/g).join(",");
        // const formatted = value.unmasked.match(/(?:\d{3})+\d{1,3}(?:\.|$)/g).join(",");
        let formatted = value.unmasked.replace(
          /(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g,
          "$1,"
        );
        // let formatted = value.unmasked.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        value.masked = `\$${formatted}`;
        return true;
      }
    },
  },
  mounted: function () {
    this.index();
  },
};
</script>