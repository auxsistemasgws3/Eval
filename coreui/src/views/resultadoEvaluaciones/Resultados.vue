<template>
  <div>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-speedometer" size="xl" class="mt-1" />
        &nbsp;
        <span class="h4">Resultados </span>
      </CCardHeader>
      <CTabs :active-tab.sync="activeTab">
        <CTab>
          <template slot="title">
            <CIcon name="cil-clipboard" /> Desempeño y Lider
          </template>
          <CRow>
            <CCol>&nbsp;</CCol>
          </CRow>
          <CCol sm="4">
            <CSelect :value.sync="peridosDiferentesConsulta" :plain="true" label="Periodo:"
              :options="peridosDiferentesConsulta_lts" placeholder="Selecciona un periodo" />
            <CButton color="success" variant="outline" square size="sm"
              @click="getMostrarResultados(peridosDiferentesConsulta)">
              Realizar consulta
            </CButton>
            <CButton color="warning" variant="outline" square size="sm"
              @click="getSincontestar(peridosDiferentesConsulta)">
              Sin contestar
            </CButton>
          </CCol>
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
                  <CButton color="success" variant="outline" square size="sm"
                    @click="getUserResults(item.id, peridosDiferentesConsulta)">
                    Resultados
                  </CButton>
                </td>
              </template>
            </CDataTable>
          </CCardBody>
        </CTab> 
        <!-- <p>Hii</p> -->
        <CTab title="Clima Laboral y Departamentos">
          <template slot="title">
            <CIcon :name="activeTab === 1 ? 'cil-folder-open' : 'cil-folder'" />
            Clima Laboral y Departamentos
          </template>
          <CRow>
            <CCol>&nbsp;</CCol>
          </CRow>
          <CCol sm="4">
            <CSelect :value.sync="peridosDiferentesConsulta" :plain="true" label="Periodo:"
              :options="peridosDiferentesConsulta_lts" placeholder="Selecciona un periodo" />
          </CCol>
          <CRow>
            <CCol v-for="(item, idx) in evaluacionesDepartamentos" :key="'grap' + idx" sm="6">
              <CCard>
                <CCardHeader>
                  <CButton color="secondary" disabled size="sm">
                    <CIcon name="cil-Globe-Alt" />
                  </CButton>
                  <label v-if="item.lider != null"><b>{{item.name}} - {{ item.lider.name}} {{ item.lider.primer_apellido }} {{ item.lider.segundo_apellido }}</b></label>
                  <label v-if="item.lider == null"><b>{{item.name}}</b></label>
                </CCardHeader>
                <CCardBody>
                  <CButton variant="outline" size="lg" class="mx-auto" style="width: 200px;"
                    color="success" @click="getResultsDep(item.id, peridosDiferentesConsulta)">
                    Resultados
                  </CButton>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
          <CRow>
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
                  <CButton variant="outline" size="lg" class="mx-auto" style="width: 200px;"
                    color="success" @click="getResultadosClima(peridosDiferentesConsulta)">
                    Resultados
                  </CButton>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol sm="3"></CCol>
          </CRow>
        </CTab>
        <!-- <CTab title="Grupal">
          <template slot="title">
            <CIcon :name="activeTab === 1 ? 'cil-folder-open' : 'cil-folder'" />
            Evaluaciones Grupales
          </template>
          <CRow>
            <CCol>&nbsp;</CCol>
          </CRow>
          <CCol sm="4">
            <CSelect :value.sync="peridosDiferentesConsulta" :plain="true" label="Periodo:"
              :options="peridosDiferentesConsulta_lts" placeholder="Selecciona un periodo" />
          </CCol>
          <CRow>
            <CCol>&nbsp;</CCol>
          </CRow>
          <CRow>
              <CCol sm="3"></CCol>
              <CCol sm="6">
                <CCard>
                  <CCardHeader>
                    <CButton color="secondary" disabled size="sm">
                      <CIcon name="cil-mood-good" />
                    </CButton>
                    <label><b>CONTABILIDAD</b></label>
                  </CCardHeader>
                  <CCardBody>
                    <CButton variant="outline" size="lg" class="mx-auto" style="width: 200px;"
                      color="success" @click="getResultadosGrupalContabilidad(peridosDiferentesConsulta)">
                      Resultados
                    </CButton>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol sm="3"></CCol>
          </CRow>
          <CRow>
              <CCol sm="3"></CCol>
              <CCol sm="6">
                <CCard>
                  <CCardHeader>
                    <CButton color="secondary" disabled size="sm">
                      <CIcon name="cil-mood-good" />
                    </CButton>
                    <label><b>LOGISTICA & SOPORTE TECNICO</b></label>
                  </CCardHeader>
                  <CCardBody>
                    <CButton variant="outline" size="lg" class="mx-auto" style="width: 200px;"
                      color="success" @click="getResultadosGrupalLogisticaSoporte(peridosDiferentesConsulta)">
                      Resultados
                    </CButton>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol sm="3"></CCol>
          </CRow>
        </CTab> -->
        <CTab>
          <template slot="title">
            <CIcon name="cil-clipboard" /> Evaluaciones Entre Lideres
          </template>
          <CRow>
            <CCol>&nbsp;</CCol>
          </CRow>
          <CCol sm="4">
            <CSelect :value.sync="peridosDiferentesConsulta" :plain="true" label="Periodo:"
              :options="peridosDiferentesConsulta_lts" placeholder="Selecciona un periodo" />
          </CCol>
          <CCardBody>
            <CDataTable :items="lideres" :fields="fields" :tableFilter="{
              placeholder: $t('tables.filter.placeholder'),
              label: $t('tables.filter.label') + ':',
              lazy: true,
            }" :itemsPerPageSelect="{ label: $t('tables.pageSelect') + ':' }" :noItemsView="{
              noResults: $t('tables.itemsView.noResults'),
              noItems: $t('tables.itemsView.noItems'),
            }" :items-per-page="15" hover columnFilter sorter pagination outlined size="sm" :loading="loading">
              <template #show_details="{ item }">
                <td class="py-2">
                  <CButton color="success" variant="outline" square size="sm"
                    @click="getLiderResults(item.id, peridosDiferentesConsulta)">
                    Resultados
                  </CButton>
                </td>
              </template>
            </CDataTable>
          </CCardBody>
        </CTab>
      </CTabs>
    </CCard>

    <CModal :entered="true" title="Resultados de Evaluaciones" size="xl" :show.sync="resultsModal">
      <h3 class="text-center">Evaluaciones del periodo: <font color="green">
          <b>{{usuarioEvaluado.periodoEvaluaciones}}</b>
        </font>
      </h3>
      <p></p>
      <CIcon name="cil-speedometer" size="xl" class="mb-1" />
      <h4>Resultados de: <b>
          <font color="navy">{{usuarioEvaluado.name}} - {{usuarioEvaluado.puesto}}</font>
        </b></h4>
      <p></p>
      <CCard>
        <CCardHeader>
          <CRow>
            <CCol sm="3">
              <span class="h5"><b style="color:rgba(0, 14, 187, 1)">Extraordinario 100</b></span>
            </CCol>
            <CCol sm="2">
              <span class="h5"><b style="color:rgba(10, 187, 0, 1)">Excelente 99-95</b></span>
            </CCol>
            <CCol sm="2">
              <span class="h5"><b style="color:rgba(238, 232, 46, 1)">Notable 94-85</b></span>
            </CCol>
            <CCol sm="2">
              <span class="h5"><b style="color:rgba(239, 114, 21, 1)">Aceptable 84-80</b></span>
            </CCol>
            <CCol sm="3">
              <span class="h5"><b style="color:rgba(239, 21, 21, 1)">Insuficiente 79-0</b></span>
            </CCol>
          </CRow>
        </CCardHeader>
      </CCard>
      <CCard v-if="usuarioEvaluado.promedioDesempeno != 0">
        <CCardHeader>
          <span v-if="usuarioEvaluado.promedioDesempeno == 100" class="h5">Evaluacion Desempeño: <b
              style="color:rgba(0, 14, 187, 1)">Extraordinario </b></span>
          <span v-if="usuarioEvaluado.promedioDesempeno < 100 && usuarioEvaluado.promedioDesempeno >= 95"
            class="h5">Evaluacion Desempeño: <b style="color:rgba(10, 187, 0, 1)">Excelente </b></span>
          <span v-if="usuarioEvaluado.promedioDesempeno < 95 && usuarioEvaluado.promedioDesempeno >= 85"
            class="h5">Evaluacion Desempeño: <b style="color:rgba(238, 232, 46, 1)">Notable </b></span>
          <span v-if="usuarioEvaluado.promedioDesempeno < 85 && usuarioEvaluado.promedioDesempeno >= 80"
            class="h5">Evaluacion Desempeño: <b style="color:rgba(239, 114, 21, 1)">Aceptable </b></span>
          <span v-if="usuarioEvaluado.promedioDesempeno < 80 && usuarioEvaluado.promedioDesempeno >= 0"
            class="h5">Evaluacion Desempeño: <b style="color:rgba(239, 21, 21, 1)">Insuficiente </b></span>
          <br>
          <span v-if="retroalimentacionObtenida.retroalimentacion == 'Extraordinario'" class="h5">Retroalimentación
            Otorgada: <b style="color:rgba(0, 14, 187, 1)">Extraordinario </b></span>
          <span v-if="retroalimentacionObtenida.retroalimentacion == 'Excelente'" class="h5">Retroalimentación Otorgada:
            <b style="color:rgba(10, 187, 0, 1)">Excelente </b></span>
          <span v-if="retroalimentacionObtenida.retroalimentacion == 'Notable'" class="h5">Retroalimentación Otorgada:
            <b style="color:rgba(238, 232, 46, 1)">Notable </b></span>
          <span v-if="retroalimentacionObtenida.retroalimentacion == 'Aceptable'" class="h5">Retroalimentación Otorgada:
            <b style="color:rgba(239, 114, 21, 1)">Aceptable </b></span>
          <span v-if="retroalimentacionObtenida.retroalimentacion == 'Insuficiente'" class="h5">Retroalimentación
            Otorgada: <b style="color:rgba(239, 21, 21, 1)">Insuficiente </b></span>
          <span v-if="retroalimentacionObtenida.retroalimentacion == null" class="h5">Retroalimentación no otorgada
          </span>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol sm="1"></CCol>
            <CCol sm="4">
              <CInput :value="usuarioEvaluado.noEvaluacionesRealizadas" label="Numero de Evaluaciones Realizadas:"
                disabled />
            </CCol>
            <CCol sm="1"></CCol>
            <CCol sm="4">
              <CInput :value="usuarioEvaluado.noEvaluacionesEsperadas" label="Numero de Evaluaciones Esperadas:"
                disabled />
            </CCol>
            <CCol sm="4"></CCol>
            <CCol sm="4">
              <CWidgetIcon text="Promedio" :header=usuarioEvaluado.promedioDesempeno color="success">
                <CIcon name='cil-speedometer' size='xl' />
              </CWidgetIcon>
            </CCol>
            <CCol sm="4">
              <CButton @click="aplicarSancion(usuarioEvaluado.id, usuarioEvaluado.periodoEvaluaciones)" color="danger">
                Aplicar sancion (10 puntos)</CButton>
            </CCol>
            <CCol sm="4"></CCol>
            <CCol sm="12">
              <CChartLine style="height: 250px" :datasets="factores_desempeno" :labels="factores_labels_desempeno"
                :options="{
                  maintainAspectRatio: false,
                }" />
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <CCard v-if="usuarioEvaluado.NoResultadosLider != 0">
        <CCardHeader>
          <span v-if="usuarioEvaluado.promedioLider == 100" class="h5">Evaluacion Lider: <b
              style="color:rgba(0, 14, 187, 1)">Extraordinario </b></span>
          <span v-if="usuarioEvaluado.promedioLider < 100 && usuarioEvaluado.promedioLider >= 95" class="h5">Evaluacion
            Lider: <b style="color:rgba(10, 187, 0, 1)">Excelente </b></span>
          <span v-if="usuarioEvaluado.promedioLider < 95 && usuarioEvaluado.promedioLider >= 85" class="h5">Evaluacion
            Lider: <b style="color:rgba(238, 232, 46, 1)">Notable </b></span>
          <span v-if="usuarioEvaluado.promedioLider < 85 && usuarioEvaluado.promedioLider >= 80" class="h5">Evaluacion
            Lider: <b style="color:rgba(239, 114, 21, 1)">Aceptable </b></span>
          <span v-if="usuarioEvaluado.promedioLider < 80 && usuarioEvaluado.promedioLider >= 0" class="h5">Evaluacion
            Lider: <b style="color:rgba(239, 21, 21, 1)">Insuficiente </b></span>
        </CCardHeader>
        <CCardBody>
          <CRow>

            <CCol sm="3">
              <CInput :value="usuarioEvaluado.NoResultadosLider" label="Numero de Evaluaciones Recibidas:" disabled />
            </CCol>
            <CCol sm="1"></CCol>
            <CCol sm="3">
              <CInput :value="usuarioEvaluado.noEvaluacionesRealizadas" label="Numero de Evaluaciones Realizadas:"
                disabled />
            </CCol>
            <CCol sm="1"></CCol>
            <CCol sm="3">
              <CInput :value="usuarioEvaluado.noEvaluacionesEsperadas" label="Numero de Evaluaciones Esperadas:"
                disabled />
            </CCol>
            <CCol sm="2"></CCol>
            <CCol sm="4">
              <CWidgetIcon text="Promedio de Evaluaciones" :header=usuarioEvaluado.promedioLider color="info">
                <CIcon name='cil-speedometer' size='xl' />
              </CWidgetIcon>
            </CCol>
            <CCol sm="4">
              <CButton @click="aplicarSancion(usuarioEvaluado.id, usuarioEvaluado.periodoEvaluaciones)" color="danger">
                Aplicar sancion (10 puntos)</CButton>
            </CCol>
            <CCol sm="1"></CCol>
          </CRow>
          <CRow>
            <CCol sm="12">
              <CChartLine style="height: 250px" :datasets="promedio_factores" :labels="factores_labels" :options="{
                maintainAspectRatio: false,
              }" />
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <CRow> 
        <CCol sm="10"></CCol>     
        <CCol><CButton :href="linkeval" color="primary">
           Imprimir Evaluación
          </CButton></CCol></CRow>
          <br>
      <CCard>
        <CCardHeader>
          <CIcon name="cil-list-rich" size="xl" class="mt-1" />
          <span class="h4">Comentarios</span>
        </CCardHeader>
        <CCardBody>
          <div class="history" switcher>
            <div class="row align-items-center" v-for="(item, index) in formatHistory" :key="item.i">
              <CCol md="1">
                <CIcon name="cil-speech" size="xl" class="mt-1" />
              </CCol>
              <CCol md="8">
                <span class="m-b-0 font-medium p-0">{{ item.comentarios }}</span>
              </CCol>
              <CCol md="3" class="text-center">
                <span class="day">{{ item.dia }}</span>
                <br />
                <span class="month">{{ item.mes }} {{ item.ano }}</span>
              </CCol>
            </div>
          </div>
        </CCardBody>
      </CCard>
    </CModal>

    <CModal :entered="true" title="Resultados de Evaluaciones" size="xl" :show.sync="resultsModalLider">
      <h3 class="text-center">Evaluaciones del periodo: <font color="green">
          <b>{{usuarioEvaluado.periodoEvaluaciones}}</b>
        </font>
      </h3>
      <p></p>
      <CIcon name="cil-speedometer" size="xl" class="mb-1" />
      <h4>Resultados evaluacion entre lideres de: <b>
          <font color="navy">{{usuarioEvaluado.name}} - {{usuarioEvaluado.puesto}}</font>
        </b></h4>
      <p></p>
      <CCard>
        <CCardHeader>
          <CRow>
            <CCol sm="3">
              <span class="h5"><b style="color:rgba(0, 14, 187, 1)">Extraordinario 100</b></span>
            </CCol>
            <CCol sm="2">
              <span class="h5"><b style="color:rgba(10, 187, 0, 1)">Excelente 99-95</b></span>
            </CCol>
            <CCol sm="2">
              <span class="h5"><b style="color:rgba(238, 232, 46, 1)">Notable 94-85</b></span>
            </CCol>
            <CCol sm="2">
              <span class="h5"><b style="color:rgba(239, 114, 21, 1)">Aceptable 84-80</b></span>
            </CCol>
            <CCol sm="3">
              <span class="h5"><b style="color:rgba(239, 21, 21, 1)">Insuficiente 79-0</b></span>
            </CCol>
          </CRow>
        </CCardHeader>
      </CCard>
      <CCard v-if="usuarioEvaluado.promedioDesempeno != 0">
        <CCardHeader>
          <span v-if="usuarioEvaluado.promedioDesempeno == 100" class="h5">Evaluacion Desempeño: <b
              style="color:rgba(0, 14, 187, 1)">Extraordinario </b></span>
          <span v-if="usuarioEvaluado.promedioDesempeno < 100 && usuarioEvaluado.promedioDesempeno >= 95"
            class="h5">Evaluacion Desempeño: <b style="color:rgba(10, 187, 0, 1)">Excelente </b></span>
          <span v-if="usuarioEvaluado.promedioDesempeno < 95 && usuarioEvaluado.promedioDesempeno >= 85"
            class="h5">Evaluacion Desempeño: <b style="color:rgba(238, 232, 46, 1)">Notable </b></span>
          <span v-if="usuarioEvaluado.promedioDesempeno < 85 && usuarioEvaluado.promedioDesempeno >= 80"
            class="h5">Evaluacion Desempeño: <b style="color:rgba(239, 114, 21, 1)">Aceptable </b></span>
          <span v-if="usuarioEvaluado.promedioDesempeno < 80 && usuarioEvaluado.promedioDesempeno >= 0"
            class="h5">Evaluacion Desempeño: <b style="color:rgba(239, 21, 21, 1)">Insuficiente </b></span>
          <br>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol sm="1"></CCol>
            <CCol sm="4">
              <CInput :value="usuarioEvaluado.noEvaluacionesRealizadas" label="Numero de Evaluaciones Realizadas:"
                disabled />
            </CCol>
            <CCol sm="1"></CCol>
            <CCol sm="4">
              <CInput :value="usuarioEvaluado.noEvaluacionesEsperadas" label="Numero de Evaluaciones Esperadas:"
                disabled />
            </CCol>
            <CCol sm="4"></CCol>
            <CCol sm="4">
              <CWidgetIcon text="Promedio" :header=usuarioEvaluado.promedioDesempeno color="success">
                <CIcon name='cil-speedometer' size='xl' />
              </CWidgetIcon>
            </CCol>
            <CCol sm="4">
              <CButton @click="aplicarSancion(usuarioEvaluado.id, usuarioEvaluado.periodoEvaluaciones)" color="danger">
                Aplicar sancion (10 puntos)</CButton>
            </CCol>
            <CCol sm="4"></CCol>
          </CRow>
          <CRow>
            <CCol sm="12">
              <CChartLine style="height: 250px" :datasets="factores_desempeno" :labels="factores_labels_desempeno"
                :options="{
                  maintainAspectRatio: false,
                }" />
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <CCard v-if="usuarioEvaluado.NoResultadosLider != 0">
        <CCardHeader>
          <span v-if="usuarioEvaluado.promedioLider == 100" class="h5">Evaluacion Lider: <b
              style="color:rgba(0, 14, 187, 1)">Extraordinario </b></span>
          <span v-if="usuarioEvaluado.promedioLider < 100 && usuarioEvaluado.promedioLider >= 95" class="h5">Evaluacion
            Lider: <b style="color:rgba(10, 187, 0, 1)">Excelente </b></span>
          <span v-if="usuarioEvaluado.promedioLider < 95 && usuarioEvaluado.promedioLider >= 85" class="h5">Evaluacion
            Lider: <b style="color:rgba(238, 232, 46, 1)">Notable </b></span>
          <span v-if="usuarioEvaluado.promedioLider < 85 && usuarioEvaluado.promedioLider >= 80" class="h5">Evaluacion
            Lider: <b style="color:rgba(239, 114, 21, 1)">Aceptable </b></span>
          <span v-if="usuarioEvaluado.promedioLider < 80 && usuarioEvaluado.promedioLider >= 0" class="h5">Evaluacion
            Lider: <b style="color:rgba(239, 21, 21, 1)">Insuficiente </b></span>
        </CCardHeader>
        <CCardBody>
          <CRow>

            <CCol sm="3">
              <CInput :value="usuarioEvaluado.NoResultadosLider" label="Numero de Evaluaciones Recibidas:" disabled />
            </CCol>
            <CCol sm="1"></CCol>
            <CCol sm="3">
              <CInput :value="usuarioEvaluado.noEvaluacionesRealizadas" label="Numero de Evaluaciones Realizadas:"
                disabled />
            </CCol>
            <CCol sm="1"></CCol>
            <CCol sm="3">
              <CInput :value="usuarioEvaluado.noEvaluacionesEsperadas" label="Numero de Evaluaciones Esperadas:"
                disabled />
            </CCol>
            <CCol sm="2"></CCol>
            <CCol sm="4">
              <CWidgetIcon text="Promedio de Evaluaciones" :header=usuarioEvaluado.promedioLider color="info">
                <CIcon name='cil-speedometer' size='xl' />
              </CWidgetIcon>
            </CCol>
            <CCol sm="1"></CCol>
          </CRow>
          <CRow>
            <CCol sm="12">
              <CChartLine style="height: 250px" :datasets="promedio_factores" :labels="factores_labels" :options="{
                maintainAspectRatio: false,
              }" />
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <CRow> 
        <CCol sm="10"></CCol>     
        <CCol><CButton :href="linklider" color="primary">
           Imprimir Evaluación
          </CButton></CCol></CRow>
          <br>
      <CCard>
        <CCardHeader>
          <CIcon name="cil-list-rich" size="xl" class="mt-1" />
          <span class="h4">Comentarios</span>
        </CCardHeader>
        <CCardBody>
          <div class="history" switcher>
            <div class="row align-items-center" v-for="(item, index) in formatHistory" :key="item.i">
              <CCol md="1">
                <CIcon name="cil-speech" size="xl" class="mt-1" />
              </CCol>
              <CCol md="8">
                <span class="m-b-0 font-medium p-0">{{ item.comentarios }}</span>
              </CCol>
              <CCol md="3" class="text-center">
                <span class="day">{{ item.dia }}</span>
                <br />
                <span class="month">{{ item.mes }} {{ item.ano }}</span>
              </CCol>
            </div>
          </div>
        </CCardBody>
      </CCard>
    </CModal>

    <CModal :entered="true" title="Resultados de Evaluaciones" size="xl" :show.sync="resultsDepModal">
      <h3 class="text-center">Evaluaciones del periodo: <font color="green">
          <b>{{usuarioEvaluado.periodoEvaluaciones}}</b>
        </font>
      </h3>
      <p></p>
      <CIcon name="cil-speedometer" size="xl" class="mb-1" />
      <h4>Resultados de: <b>
          <font color="navy">{{usuarioEvaluado.name}}</font>
        </b></h4>
      <p></p>
      <CCard>
        <CCardHeader>
          <CRow>
            <CCol sm="3">
              <span class="h5"><b style="color:rgba(0, 14, 187, 1)">Extraordinario 100</b></span>
            </CCol>
            <CCol sm="2">
              <span class="h5"><b style="color:rgba(10, 187, 0, 1)">Excelente 99-95</b></span>
            </CCol>
            <CCol sm="2">
              <span class="h5"><b style="color:rgba(238, 232, 46, 1)">Notable 94-85</b></span>
            </CCol>
            <CCol sm="2">
              <span class="h5"><b style="color:rgba(239, 114, 21, 1)">Aceptable 84-80</b></span>
            </CCol>
            <CCol sm="3">
              <span class="h5"><b style="color:rgba(239, 21, 21, 1)">Insuficiente 79-0</b></span>
            </CCol>
          </CRow>
        </CCardHeader>
      </CCard>
      <CCard>
        <!-- <CCardHeader>
          <span class="h5">Evaluacion Departamento</span>
        </CCardHeader> -->
        <CCardHeader>
          <span v-if="usuarioEvaluado.promedioDepartamento == 100" class="h5">Evaluacion Departamento: <b
              style="color:rgba(0, 14, 187, 1)">Extraordinario </b></span>
          <span v-if="usuarioEvaluado.promedioDepartamento < 100 && usuarioEvaluado.promedioDepartamento >= 95"
            class="h5">Evaluacion Departamento: <b style="color:rgba(10, 187, 0, 1)">Excelente </b></span>
          <span v-if="usuarioEvaluado.promedioDepartamento < 95 && usuarioEvaluado.promedioDepartamento >= 85"
            class="h5">Evaluacion Departamento: <b style="color:rgba(238, 232, 46, 1)">Notable </b></span>
          <span v-if="usuarioEvaluado.promedioDepartamento < 85 && usuarioEvaluado.promedioDepartamento >= 80"
            class="h5">Evaluacion Departamento: <b style="color:rgba(239, 114, 21, 1)">Aceptable </b></span>
          <span v-if="usuarioEvaluado.promedioDepartamento < 80 && usuarioEvaluado.promedioDepartamento >= 0"
            class="h5">Evaluacion Departamento: <b style="color:rgba(239, 21, 21, 1)">Insuficiente </b></span>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol sm="1"></CCol>
            <CCol sm="4">
              <CInput :value="usuarioEvaluado.NoResultadosDepartamento" label="Numero de Evaluaciones Realizadas:"
                disabled />
            </CCol>
            <CCol sm="1"></CCol>
            <CCol sm="4">
              <CInput :value="usuarioEvaluado.noEvaluacionesDepartamento" label="Numero de Evaluaciones Esperadas:"
                disabled />
            </CCol>
            <CCol sm="1"></CCol>
            <CCol sm="4">
              <CWidgetIcon text="Promedio de Evaluaciones" :header=usuarioEvaluado.promedioDepartamento color="info">
                <CIcon name='cil-speedometer' size='xl' />
              </CWidgetIcon>
            </CCol>
            <CCol sm="1"></CCol>
          </CRow>
          <CRow>
            <CCol sm="12">
              <CChartLine style="height: 250px" :datasets="promedio_factores" :labels="factores_labels" :options="{
                maintainAspectRatio: false,
              }" />
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <CRow> 
        <CCol sm="10"></CCol>     
        <CCol><CButton :href="linkdepa" color="primary">
           Imprimir Evaluación
          </CButton></CCol></CRow>
      <CCard>
        <CCardHeader>
          <CIcon name="cil-list-rich" size="xl" class="mt-1" />
          <span class="h4">Comentarios</span>
        </CCardHeader>
        <CCardBody>
          <div class="history" switcher>
            <div class="row align-items-center" v-for="(item, index) in formatHistory" :key="item.i">
              <CCol md="1">
                <CIcon name="cil-speech" size="xl" class="mt-1" />
              </CCol>
              <CCol md="8">
                <span class="m-b-0 font-medium p-0">{{ item.comentarios }}</span>
              </CCol>
              <CCol md="3" class="text-center">
                <span class="day">{{ item.dia }}</span>
                <br />
                <span class="month">{{ item.mes }} {{ item.ano }}</span>
              </CCol>
            </div>
          </div>
        </CCardBody>
      </CCard>
    </CModal>

    <CModal :entered="true" title="Resultados de Evaluaciones" size="xl" :show.sync="resultsClimaModal">
      <h3 class="text-center">Evaluaciones del periodo: <font color="green">
          <b>{{usuarioEvaluado.periodoEvaluaciones}}</b>
        </font>
      </h3>
      <p></p>

      <CIcon name="cil-speedometer" size="xl" class="mb-1" />
      <h4>Resultados de <b>
          <font color="navy">Clima Laboral</font>
        </b></h4>
      <p></p>
      <CCard>
        <CCardHeader>
          <span class="h5">Evaluación Clima Laboral</span>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol sm="1"></CCol>
            <CCol sm="4">
              <CInput :value="usuarioEvaluado.NoResultadosDepartamento" label="Numero de Evaluaciones Realizadas:"
                disabled />
            </CCol>
            <CCol sm="2"></CCol>
            <CCol sm="4">
              <CWidgetIcon text="Promedio de Evaluaciones" :header=usuarioEvaluado.promedioDepartamento color="info">
                <CIcon name='cil-speedometer' size='xl' />
              </CWidgetIcon>
            </CCol>
            <CCol sm="12">
            <CChartLine style="height: 250px" :datasets="promedio_factores" :labels="factores_labels" :options="{
              maintainAspectRatio: false,
            }" />
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          <CIcon name="cil-list-rich" size="xl" class="mt-1" />
          <span class="h4">Comentarios</span>
        </CCardHeader>
        <CCardBody>
          <div class="history" switcher>
            <div class="row align-items-center" v-for="(item, index) in formatHistory" :key="item.i">
              <CCol md="1">
                <CIcon name="cil-speech" size="xl" class="mt-1" />
              </CCol>
              <CCol md="8">
                <span class="m-b-0 font-medium p-0">{{ item.comentarios }}</span>
              </CCol>
              <CCol md="3" class="text-center">
                <span class="day">{{ item.dia }}</span>
                <br />
                <span class="month">{{ item.mes }} {{ item.ano }}</span>
              </CCol>
            </div>
          </div>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          <CIcon name="cil-list-rich" size="xl" class="mt-1" />
          <span class="h4">Comentarios a los aquipos</span>
        </CCardHeader>
        <CCardBody>
          <div class="history" switcher>
            <div class="row align-items-center" v-for="(item, index) in formatHistory2" :key="item.i">
              <CCol md="1">
                <CIcon name="cil-speech" size="xl" class="mt-1" />
              </CCol>
              <CCol md="8">
                <span class="m-b-0 font-medium p-0">{{ item.comentarios2 }}</span>
              </CCol>
              <CCol md="3" class="text-center">
                <span class="day">{{ item.dia }}</span>
                <br />
                <span class="month">{{ item.mes }} {{ item.ano }}</span>
              </CCol>
            </div>
          </div>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          <CIcon name="cil-list-rich" size="xl" class="mt-1" />
          <span class="h4">Comentarios a la empresa</span>
        </CCardHeader>
        <CCardBody>
          <div class="history" switcher>
            <div class="row align-items-center" v-for="(item, index) in formatHistory3" :key="item.i">
              <CCol md="1">
                <CIcon name="cil-speech" size="xl" class="mt-1" />
              </CCol>
              <CCol md="8">
                <span class="m-b-0 font-medium p-0">{{ item.comentarios3 }}</span>
              </CCol>
              <CCol md="3" class="text-center">
                <span class="day">{{ item.dia }}</span>
                <br />
                <span class="month">{{ item.mes }} {{ item.ano }}</span>
              </CCol>
            </div>
          </div>
        </CCardBody>
      </CCard>
    </CModal>

    <CModal :entered="true" title="Resultados de Evaluaciones" size="xl" :show.sync="resultsGrupalModal">
      <h3 class="text-center">Evaluaciones del periodo: <font color="green">
          <b>{{usuarioEvaluado.periodoEvaluaciones}}</b>
        </font>
      </h3>
      <p></p>

      <CIcon name="cil-speedometer" size="xl" class="mb-1" />
      <h4>Resultados de <b>
          <font color="navy">Evaluacion Grupal CONTABILIDAD</font>
        </b></h4>
      <p></p>
      <CCard>
        <CCardHeader>
          <span class="h5">Evaluacion Grupal</span>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol sm="1"></CCol>
            <CCol sm="4">
              <CInput :value="usuarioEvaluado.NoResultadosDepartamento" label="Numero de Evaluaciones Realizadas:"
                disabled />
            </CCol>
            <CCol sm="2"></CCol>
            <CCol sm="4">
              <CWidgetIcon text="Promedio de Evaluaciones" :header=usuarioEvaluado.promedioDepartamento color="info">
                <CIcon name='cil-speedometer' size='xl' />
              </CWidgetIcon>
            </CCol>
            <CCol sm="12">
            <CChartLine style="height: 250px" :datasets="promedio_factores" :labels="factores_labels" :options="{
              maintainAspectRatio: false,
            }" />
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
        <CRow> 
        <CCol sm="10"></CCol>     
        <CCol><CButton href="" color="primary">
           Imprimir Evaluación
          </CButton></CCol></CRow>
          <br>
      <CCard>
        <CCardHeader>
          <CIcon name="cil-list-rich" size="xl" class="mt-1" />
          <span class="h4">Comentarios</span>
        </CCardHeader>
        <CCardBody>
          <div class="history" switcher>
            <div class="row align-items-center" v-for="(item, index) in formatHistory" :key="item.i">
              <CCol md="1">
                <CIcon name="cil-speech" size="xl" class="mt-1" />
              </CCol>
              <CCol md="8">
                <span class="m-b-0 font-medium p-0">{{ item.comentarios }}</span>
              </CCol>
              <CCol md="3" class="text-center">
                <span class="day">{{ item.dia }}</span>
                <br />
                <span class="month">{{ item.mes }} {{ item.ano }}</span>
              </CCol>
            </div>
          </div>
        </CCardBody>
      </CCard>
    </CModal>

    <CModal :entered="true" title="Resultados de Evaluaciones" size="xl" :show.sync="resultsGrupalModalLS">
      <h3 class="text-center">Evaluaciones del periodo: <font color="green">
          <b>{{usuarioEvaluado.periodoEvaluaciones}}</b>
        </font>
      </h3>
      <p></p>

      <CIcon name="cil-speedometer" size="xl" class="mb-1" />
      <h4>Resultados de <b>
          <font color="navy">Evaluacion Grupal LOGISTICA & SOPORTE TECNICO</font>
        </b></h4>
      <p></p>
      <CCard>
        <CCardHeader>
          <span class="h5">Evaluacion Grupal</span>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol sm="1"></CCol>
            <CCol sm="4">
              <CInput :value="usuarioEvaluado.NoResultadosDepartamento" label="Numero de Evaluaciones Realizadas:"
                disabled />
            </CCol>
            <CCol sm="2"></CCol>
            <CCol sm="4">
              <CWidgetIcon text="Promedio de Evaluaciones" :header=usuarioEvaluado.promedioDepartamento color="info">
                <CIcon name='cil-speedometer' size='xl' />
              </CWidgetIcon>
            </CCol>
            <CCol sm="12">
            <CChartLine style="height: 250px" :datasets="promedio_factores" :labels="factores_labels" :options="{
              maintainAspectRatio: false,
            }" />
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
        <CRow> 
        <CCol sm="10"></CCol>     
        <CCol><CButton href="link" color="primary">
           Imprimir Evaluación
          </CButton></CCol></CRow>
          <br> 
      <CCard>
        <CCardHeader>
          <CIcon name="cil-list-rich" size="xl" class="mt-1" />
          <span class="h4">Comentarios</span>
        </CCardHeader>
        <CCardBody>
          <div class="history" switcher>
            <div class="row align-items-center" v-for="(item, index) in formatHistory" :key="item.i">
              <CCol md="1">
                <CIcon name="cil-speech" size="xl" class="mt-1" />
              </CCol>
              <CCol md="8">
                <span class="m-b-0 font-medium p-0">{{ item.comentarios }}</span>
              </CCol>
              <CCol md="3" class="text-center">
                <span class="day">{{ item.dia }}</span>
                <br />
                <span class="month">{{ item.mes }} {{ item.ano }}</span>
              </CCol>
            </div>
          </div>
        </CCardBody>
      </CCard>
    </CModal>

    <CModal :entered="true" title="Evaluaciones realizadas" size="xl" :show.sync="evaluacionesRealizadasModal">
      <h3 class="text-center">Progreso de Evaluaciones realizadas
      </h3>
      <p></p>

      <CIcon name="cil-speedometer" size="xl" class="mb-1" />
      <h4>Evaluaciones contestadas por los <b>
          <font color="navy">Colaboradores</font>
        </b></h4>
      <p></p>
      
      <CCardBody>
            <CDataTable :items="usuariosRespuestas" :fields="fields2" :tableFilter="{
              placeholder: $t('tables.filter.placeholder'),
              label: $t('tables.filter.label') + ':',
              lazy: true,
            }" :itemsPerPageSelect="{ label: $t('tables.pageSelect') + ':' }" :noItemsView="{
              noResults: $t('tables.itemsView.noResults'),
              noItems: $t('tables.itemsView.noItems'),
            }" :items-per-page="15" hover columnFilter sorter pagination outlined size="sm" :loading="loading">
              
            </CDataTable>
          </CCardBody>
    </CModal>

    <CModal :entered="true" title="Evaluaciones realizadas" size="xl" :show.sync="evaluacionesSinRealizarModal">
      <h3 class="text-center">Progreso de Evaluaciones realizadas
      </h3>
      <p></p>

      <CIcon name="cil-speedometer" size="xl" class="mb-1" />
      <h4>Evaluaciones contestadas por los <b>
          <font color="navy">Colaboradores</font>
        </b></h4>
      <p></p>
      
      <CCardBody>
            <CDataTable :items="usuariosSinContestar" :fields="fields3" :tableFilter="{
              placeholder: $t('tables.filter.placeholder'),
              label: $t('tables.filter.label') + ':',
              lazy: true,
            }" :itemsPerPageSelect="{ label: $t('tables.pageSelect') + ':' }" :noItemsView="{
              noResults: $t('tables.itemsView.noResults'),
              noItems: $t('tables.itemsView.noItems'),
            }" :items-per-page="15" hover columnFilter sorter pagination outlined size="sm" :loading="loading">
              
            </CDataTable>
          </CCardBody>
    </CModal>

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
  { key: "nombre_completo", label: "Nombre completo", _style: "min-width:200px" },
  { key: "email", label: "Correo", _style: "min-width:100px;" },
  { key: "sucursal_desc", label: "Sucursal", _style: "min-width:100px;" },
  { key: "show_details", label: "", _style: "width:1%", sorter: false, filter: false, },
];
const fields2 = [
  { key: "name", label: "Nombre", _style: "min-width:200px" },
  { key: "email", label: "Correo", _style: "min-width:100px;" },
  { key: "evaluaciones", label: "Evaluaciones realizadas", _style: "min-width:100px;" },
];
const fields3 = [
  { key: "name", label: "Nombre", _style: "min-width:200px" },
  { key: "email", label: "Correo", _style: "min-width:100px;" },
  { key: "puesto", label: "Puesto", _style: "min-width:100px;" },
];

export default {
  name: "AdvancedTables",
  moodGood: cilMoodGood,
  plusIcon: cilPlus,
  usuarioEvaluado: {
    id: "",
    name: "",
    id_departamento: "",
    sucursal_id: "",
    puesto: "",
    periodoEvaluaciones: "",
  },

  //HII
  data() {
    return {
      linkeval:"",
      linklider:"",
      linkdepa:"",
      usuarioEvaluado: {
        id: "",
        name: "",
        id_departamento: "",
        sucursal_id: "",
        puesto: "",
        periodoEvaluaciones: "",
        promedioDesempeno: "",
        NoResultadosLider: "",
        promedioLider: "",
        promedioDepartamento: "",
        NoResultadosDepartamento: "",
        noEvaluacionesDepartamento: "",
      },
      peridosDiferentesConsulta: "",
      peridosDiferentesConsulta_lts: [],
      evaluacionesDepartamentos: "",
      activeTab: 0,
      resultsModal: false,
      resultsModalLider: false,
      resultsDepModal: false,
      resultsClimaModal: false,
      resultsGrupalModalLS: false,
      resultsGrupalModal:false,
      evaluacionesRealizadasModal: false,
      evaluacionesSinRealizarModal: false,
      moneda: "",
      estatus: [],
      sucursales: [],
      departamentos: [],
      jefeInmediato: [],
      roles: [],
      items: [],
      lideres: [],
      usuariosSinContestar: [],
      usuariosRespuestas: [],
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
      retroalimentacionObtenida: { retroalimentacion: "" },
      promedio_factores: [
        {
          data: [],
          fill: true,
          tension: 0.05,
          borderColor: "rgba(32, 189, 15)",
          borderWidth: 4,
          label: "Promedio / Factores",
        },
      ],
      factores_labels: [],
      factores_desempeno: [
        {
          data: [],
          fill: true,
          tension: 0.05,
          borderColor: "rgba(35, 153, 215)",
          borderWidth: 4,
          label: "Promedio / Factores",
        },
      ],
      factores_labels_desempeno: [],
    };
  },
  computed: {
    formatHistory() {
      return this.comentarios.map((item) => {
        return {
          ...item,
          hora: item.created_at ? moment(String(item.created_at)).format("hh:mm a") : "",
          dia: item.created_at ? moment(String(item.created_at)).format("DD") : "",
          mes: item.created_at ? moment(String(item.created_at)).format("MMMM") : "",
          ano: item.created_at ? moment(String(item.created_at)).format("YYYY") : "",
        };
      });
      
    },
    formatHistory2() {
      return this.comentarios2.map((item) => {
        return {
          ...item,
          hora: item.created_at ? moment(String(item.created_at)).format("hh:mm a") : "",
          dia: item.created_at ? moment(String(item.created_at)).format("DD") : "",
          mes: item.created_at ? moment(String(item.created_at)).format("MMMM") : "",
          ano: item.created_at ? moment(String(item.created_at)).format("YYYY") : "",
        };
      });
      
    },
    formatHistory3() {
      return this.comentarios3.map((item) => {
        return {
          ...item,
          hora: item.created_at ? moment(String(item.created_at)).format("hh:mm a") : "",
          dia: item.created_at ? moment(String(item.created_at)).format("DD") : "",
          mes: item.created_at ? moment(String(item.created_at)).format("MMMM") : "",
          ano: item.created_at ? moment(String(item.created_at)).format("YYYY") : "",
        };
      });
      
    },
  },
  methods: {
    index() {
      let self = this;
      axios
        .get(
          this.$apiAdress +
          "/api/evaluaciones/resultado?token=" +
          localStorage.getItem("api_token")
        )
        .then(function (response) {
          console.log(response.data);
          self.peridosDiferentesConsulta_lts = response.data.periodosDiferentes;
          self.items = response.data.usuarios;
          self.sucursales = response.data.sucursal;
          self.evaluacionesDepartamentos = response.data.departamentos_lst;
          self.lideres = response.data.lideres;
          //self.poEvaluacionesRealizadas = response.data.poEvaluacionesRealizadas;
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
    getUserResults(id, periodo) {
      let self = this;
      axios
        .get(
          this.$apiAdress +
          "/api/evaluaciones/resultados/" +
          id + "/" + periodo +
          "?token=" +
          localStorage.getItem("api_token")
        )
        .then(function (response) {
          // console.log(response.data);
   
          self.linkeval = "/api/evaluaciones/resultados/imprimir/"+ id +"/" + periodo + "?token=" + localStorage.getItem("api_token");
          self.usuarioEvaluado.promedioDesempeno = "";
          self.usuarioEvaluado.NoResultadosLider = "";
          self.resultsModal = true;
          self.usuarioEvaluado.id = response.data.usuarioEvaluado.id;
          self.usuarioEvaluado.name = response.data.usuarioEvaluado.name;
          self.usuarioEvaluado.id_departamento = response.data.usuarioEvaluado.id_departamento;
          self.usuarioEvaluado.sucursal_id = response.data.usuarioEvaluado.sucursal_id;
          self.usuarioEvaluado.puesto = response.data.usuarioEvaluado.puesto;
          self.usuarioEvaluado.periodoEvaluaciones = response.data.periodo;
          console.log(response.data.resultadosDesempenoPromedio);
          self.usuarioEvaluado.promedioDesempeno = response.data.resultadosDesempenoPromedio;
          self.usuarioEvaluado.NoResultadosLider = response.data.NoResultadosLider;
          self.usuarioEvaluado.promedioLider = response.data.promedioLider;
          self.usuarioEvaluado.noEvaluacionesRealizadas = response.data.noEvaluacionesRealizadas;
          self.usuarioEvaluado.noEvaluacionesEsperadas = response.data.noEvaluacionesEsperadas;
          self.usuarioEvaluado.poEvaluacionesRealizadas = response.data.poEvaluacionesRealizadas;
          self.promedio_factores[0].data = response.data.promediosFactoresLider;
          self.factores_labels = response.data.promediosFactoresLabelsLider;
          self.factores_desempeno[0].data = response.data.FactoresDesempeno;
          self.factores_labels_desempeno = response.data.FactoresLabelsDesempeno;

          self.comentarios = response.data.comentarios;
          self.isTouched = true;
          self.isInvalid;

          self.retroalimentacionObtenida.retroalimentacion = response.data.retroalimentacionObtenida.retroalimentacion;
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    getLiderResults(id, periodo) {
      let self = this;
      console.log(id);
      console.log(periodo);
      axios
        .get(
          this.$apiAdress +
          "/api/evaluaciones/resultadosLideres/" +
          id + "/" + periodo +
          "?token=" +
          localStorage.getItem("api_token")
        )
        .then(function (response) {
          console.log(response.data);

          self.usuarioEvaluado.promedioDesempeno = "";
          self.usuarioEvaluado.NoResultadosLider = "";
          self.resultsModalLider = true;
          self.linklider = "/api/evaluaciones/resultadoslider/imprimir/"+ id +"/" + periodo + "?token=" + localStorage.getItem("api_token");
          self.usuarioEvaluado.id = response.data.usuarioEvaluado.id;
          self.usuarioEvaluado.name = response.data.usuarioEvaluado.name;
          self.usuarioEvaluado.id_departamento = response.data.usuarioEvaluado.id_departamento;
          self.usuarioEvaluado.sucursal_id = response.data.usuarioEvaluado.sucursal_id;
          self.usuarioEvaluado.puesto = response.data.usuarioEvaluado.puesto;
          self.usuarioEvaluado.periodoEvaluaciones = response.data.periodo;
          self.usuarioEvaluado.NoResultadosLider = response.data.NoResultadosLider;
          self.usuarioEvaluado.promedioLider = response.data.promedioLider;
          self.usuarioEvaluado.noEvaluacionesRealizadas = response.data.noEvaluacionesRealizadas;
          self.usuarioEvaluado.noEvaluacionesEsperadas = response.data.noEvaluacionesEsperadas;
          self.usuarioEvaluado.poEvaluacionesRealizadas = response.data.poEvaluacionesRealizadas;
          self.promedio_factores[0].data = response.data.promediosFactoresLider;
          self.factores_labels = response.data.promediosFactoresLabelsLider;
          self.comentarios = response.data.comentarios;
          self.isTouched = true;
          self.isInvalid;
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    getMostrarResultados(periodo) {
      let self = this;
      console.log(periodo);
      axios
        .get(
          this.$apiAdress +
          "/api/evaluaciones/getMostrarResultados/" +
          periodo + "?token=" +
          localStorage.getItem("api_token")
        )
        .then(function (response) {
          console.log(response.data);
          self.usuariosRespuestas = response.data.usuariosRespuestas;
          self.departamentos_lst = response.data.departamentos_lst;
          self.evaluacionesRealizadasModal = true;
          self.formatData();
          self.isTouched = true;
          self.isInvalid;
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    getSincontestar(periodo) {
      let self = this;
      axios
        .get(
          this.$apiAdress +
          "/api/evaluaciones/getSincontestar/" +
          periodo + "?token=" +
          localStorage.getItem("api_token")
        )
        .then(function (response) {
          console.log(response.data);
          self.evaluacionesSinRealizarModal = true;
          self.usuariosSinContestar = response.data.usuariosSinContestar;
          self.formatData();
          self.isTouched = true;
          self.isInvalid;
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    aplicarSancion(id, periodo) {
      let self = this;
      console.log(id);
      console.log(periodo);
      axios
        .get(
          this.$apiAdress +
          "/api/evaluaciones/resultados/aplicarSancion/" +
          id + "/" + periodo +
          "?token=" +
          localStorage.getItem("api_token")
        )
        .then(function (response) {
            self.$toast.success(self.$t("messages.insert"));
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    getResultsDep(idDep, periodoDep) {
      let self = this;
      axios
        .get(
          this.$apiAdress +
          "/api/evaluaciones/resultadosDep/" +
          idDep + "/" + periodoDep +
          "?token=" +
          localStorage.getItem("api_token")
        )
        .then(function (response) {
          console.log(response.data);
          self.linkdepa = "/api/evaluaciones/resultadosdepa/imprimir/"+ idDep +"/" + periodoDep + "?token=" + localStorage.getItem("api_token");
          self.usuarioEvaluado.promedioDesempeno = "";
          self.usuarioEvaluado.NoResultadosLider = "";
          self.resultsDepModal = true;
          self.usuarioEvaluado.id = response.data.departamentoEvaluado.id;
          self.usuarioEvaluado.name = response.data.departamentoEvaluado.name;
          self.usuarioEvaluado.periodoEvaluaciones = response.data.periodoDep;
          self.usuarioEvaluado.NoResultadosDepartamento = response.data.noResultadosDepartamento;
          self.usuarioEvaluado.noEvaluacionesDepartamento = response.data.noEvaluacionesDepartamento,
            self.usuarioEvaluado.promedioDepartamento = response.data.promedioDepartamento;
          self.promedio_factores[0].data = response.data.promediosFactores;
          self.factores_labels = response.data.promediosFactoresLabels;
          self.comentarios = response.data.comentarios;
          self.isTouched = true;
          self.isInvalid;
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    getResultadosClima(periodoCli) {
      let self = this;
      console.log(periodoCli);
      axios
        .get(
          this.$apiAdress +
          "/api/evaluaciones/resultadosClima/" +
          periodoCli +
          "?token=" +
          localStorage.getItem("api_token")
        )
        .then(function (response) {
          console.log(response.data);
          self.usuarioEvaluado.promedioDesempeno = "";
          self.usuarioEvaluado.NoResultadosLider = "";
          self.resultsClimaModal = true;
          self.usuarioEvaluado.periodoEvaluaciones = response.data.periodoCli;
          self.usuarioEvaluado.NoResultadosDepartamento = response.data.noResultadosClima;
          self.usuarioEvaluado.promedioDepartamento = response.data.promedioClima;
          self.promedio_factores[0].data = response.data.promediosFactores;
          self.factores_labels = response.data.promediosFactoresLabels;
          self.comentarios = response.data.comentarios;
          self.comentarios2 = response.data.comentarios2;
          self.comentarios3 = response.data.comentarios3;
          self.isTouched = true;
          self.isInvalid;
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    // getResultadosGrupalContabilidad(periodoCli) {
    //   let self = this;
    //   console.log(periodoCli);
    //   axios
    //     .get(
    //       this.$apiAdress +
    //       "/api/evaluaciones/resultadosGrupalContabilidad/" +
    //       periodoCli +
    //       "?token=" +
    //       localStorage.getItem("api_token")
    //     )
    //     .then(function (response) {
    //       console.log(response.data);
    //       self.usuarioEvaluado.promedioDesempeno = "";
    //       self.usuarioEvaluado.NoResultadosLider = "";
    //       self.resultsGrupalModal = true;
    //       self.usuarioEvaluado.periodoEvaluaciones = response.data.periodoCli;
    //       self.usuarioEvaluado.NoResultadosDepartamento = response.data.noResultadosGrupal;
    //       self.usuarioEvaluado.promedioDepartamento = response.data.promedioGrupal;
    //       self.promedio_factores[0].data = response.data.promediosFactores;
    //       self.factores_labels = response.data.promediosFactoresLabels;
    //       self.comentarios = response.data.comentarios;
    //       self.isTouched = true;
    //       self.isInvalid;
    //     })
    //     .catch(function (error) {
    //       if (error.response.status === 401) {
    //         self.$router.push({ path: "/login" });
    //       } else {
    //         self.$toast.error(self.$t("messages.error"));
    //       }
    //     });
    // },
    // getResultadosGrupalLogisticaSoporte(periodoCli) {
    //   let self = this;
    //   console.log(periodoCli);
    //   axios
    //     .get(
    //       this.$apiAdress +
    //       "/api/evaluaciones/resultadosGrupalLogisticaSoporte/" +
    //       periodoCli +
    //       "?token=" +
    //       localStorage.getItem("api_token")
    //     )
    //     .then(function (response) {
    //       console.log(response.data);
    //       self.usuarioEvaluado.promedioDesempeno = "";
    //       self.usuarioEvaluado.NoResultadosLider = "";
    //       self.resultsGrupalModalLS = true;
    //       self.usuarioEvaluado.periodoEvaluaciones = response.data.periodoCli;
    //       self.usuarioEvaluado.NoResultadosDepartamento = response.data.noResultadosGrupal;
    //       self.usuarioEvaluado.promedioDepartamento = response.data.promedioGrupal;
    //       self.promedio_factores[0].data = response.data.promediosFactores;
    //       self.factores_labels = response.data.promediosFactoresLabels;
    //       self.comentarios = response.data.comentarios;
    //       self.isTouched = true;
    //       self.isInvalid;
    //     })
    //     .catch(function (error) {
    //       if (error.response.status === 401) {
    //         self.$router.push({ path: "/login" });
    //       } else {
    //         self.$toast.error(self.$t("messages.error"));
    //       }
    //     });
    // },
    //Hii
    async formatData() {
      let formatItems = await this.items.map((item) => {
        return {
          ...item,
          nombre_completo:
            item.name +
            " " +
            item.primer_apellido +
            " " +
            (item.segundo_apellido || ""),
          rol_desc: item.rol ? item.rol.text : "",
          sucursal_desc: item.sucursal ? item.sucursal.name : "",
        };
      });
      let formatlideres = await this.lideres.map((lideres) => {
        return {
          ...lideres,
          nombre_completo:
            lideres.name +
            " " +
            lideres.primer_apellido +
            " " +
            (lideres.segundo_apellido || ""),
          rol_desc: lideres.rol ? lideres.rol.text : "",
          sucursal_desc: lideres.sucursal ? lideres.sucursal.name : "",
        };
      });
      let formatevaluaciones = await this.usuariosRespuestas.map((usuariosRespuestas) => {
        return {
          ...usuariosRespuestas,
            nombre_completo:
            usuariosRespuestas.name +
            " " +
            usuariosRespuestas.primer_apellido +
            " " +
            (usuariosRespuestas.segundo_apellido || ""),
        };
      });
      let formatsincontestar = await this.usuariosSinContestar.map((usuariosSinContestar) => {
        return {
          ...usuariosSinContestar,
            nombre_completo:
            usuariosSinContestar.name +
            " " +
            usuariosSinContestar.primer_apellido +
            " " +
            (usuariosSinContestar.segundo_apellido || ""),
            sucursal_desc: lideres.sucursal ? lideres.sucursal.name : "",
        };
      });
      this.usuariosRespuestas = formatevaluaciones;
      this.usuariosSinContestar = formatsincontestar;
      this.items = formatItems;
      this.lideres = formatlideres;
      this.loading = false;
    },
    
    selectCheckbox(slug, code) {
      switch (slug) {
        case "setPassword":
          this.setPassword = !code;
          break;
      }
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