<template>
  <div>
    <CCard>
      <CCardHeader>
        <CIcon :content="$options.moodGood" size="xl" class="mt-1" />
        <span class="h4">Usuarios </span>
        <div class="card-header-actions">
          <CButton @click="editModal = true" color="primary" size="sm" block>
            <CIcon :content="$options.plusIcon" /> Agregar
          </CButton>
          <CButton @click="modalUsuariosScontestar = true" color="warning" size="sm" block>
            <CIcon name="cil-X-circle" /> Usuarios sin contestar
          </CButton>
        </div>
      </CCardHeader>
      <CCardBody>
        <CDataTable
          :items="items"
          :fields="fields"
          :tableFilter="{
            placeholder: $t('tables.filter.placeholder'),
            label: $t('tables.filter.label') + ':',
            lazy: true,
          }"
          :itemsPerPageSelect="{ label: $t('tables.pageSelect') + ':' }"
          :noItemsView="{
            noResults: $t('tables.itemsView.noResults'),
            noItems: $t('tables.itemsView.noItems'),
          }"
          :items-per-page="15"
          hover
          columnFilter
          sorter
          pagination
          outlined
          size="sm"
          :loading="loading"
        >
          <template #show_details="{ item, index }">
            <td class="py-2">
              <CButton
                color="primary"
                variant="outline"
                square
                size="sm"
                @click="getUser(item.id, index)"
              >
                Editar
              </CButton>
            </td>
          </template>
        </CDataTable>
      </CCardBody>
    </CCard>
    <!-- Modal muestra usuarios que solo  -->
    <CModal 
      :centered="true"
      title="Usuarios Sin Contestar"
      size="lg"
      :show.sync="modalUsuariosScontestar"
    >
    <CCard>
      <CCardBody>
        <CDataTable
          :items="items2"
          :fields="fields2"
          :noItemsView="{ noResults: $t('tables.itemsView.noResults') , noItems: $t('tables.itemsView.noItems')  }"
          :items-per-page="15"
          hover
          sorter
          pagination
          outlined
          size="sm"
          :loading="loading"
        >
        </CDataTable>
      </CCardBody>
    </CCard>
    </CModal>

    <CModal
      :centered="true"
      :title="action + ' usuario'"
      size="lg"
      :show.sync="editModal"
      @update:show="closeModal"
    >
      <CForm autocomplete="off">
        <CRow>
          <CCol sm="4">
            <CInput
              v-model="v$.user.name.$model"
              label="Nombre"
              placeholder="Nombre"
              :invalid-feedback="
                v$.user.name.$error ? v$.user.name.$errors[0].$message : ''
              "
              :is-valid="v$.user.name.$dirty ? !v$.user.name.$invalid : null"
            />
          </CCol>
          <CCol sm="4">
            <CInput
              v-model="v$.user.primer_apellido.$model"
              label="Primer apellido"
              placeholder="Primer apellido"
              :invalid-feedback="
                v$.user.primer_apellido.$error
                  ? v$.user.primer_apellido.$errors[0].$message
                  : ''
              "
              :is-valid="
                v$.user.primer_apellido.$dirty
                  ? !v$.user.primer_apellido.$invalid
                  : null
              "
            />
          </CCol>
          <CCol sm="4">
            <CInput
              v-model="v$.user.segundo_apellido.$model"
              label="Segundo apellido"
              placeholder="Segundo apellido"
              :invalid-feedback="
                v$.user.segundo_apellido.$error
                  ? v$.user.segundo_apellido.$errors[0].$message
                  : ''
              "
              :is-valid="
                v$.user.segundo_apellido.$dirty
                  ? !v$.user.segundo_apellido.$invalid
                  : null
              "
            />
          </CCol>

          <CCol sm="8">
            <CInput
              :value.sync="user.fecha_nacimiento"
              label="Fecha de Nacimiento"
              placeholder="Fecha de nacimiento"
              type="date"
              :invalid-feedback="
                v$.user.fecha_nacimiento.$error
                  ? v$.user.fecha_nacimiento.$errors[0].$message
                  : ''
              "
              :is-valid="
                v$.user.fecha_nacimiento.$dirty
                  ? !v$.user.fecha_nacimiento.$invalid
                  : null
              "
            />
          </CCol>


          <CCol sm="4">
            <CInput
              :value.sync="user.no_empleado"
              label="Numero Empleado"
              placeholder="Numero Empleado"
              :invalid-feedback="
                v$.user.no_empleado.$error
                  ? v$.user.no_empleado.$errors[0].$message
                  : ''
              "
              :is-valid="
                v$.user.no_empleado.$dirty
                  ? !v$.user.no_empleado.$invalid
                  : null
              "
            />
          </CCol>
          <CCol sm="8">
            <CInput
              :value.sync="user.fecha_ingreso"
              label="Fecha Ingreso"
              placeholder="Fecha Ingreso"
              type="date"
              :invalid-feedback="
                v$.user.fecha_ingreso.$error
                  ? v$.user.fecha_ingreso.$errors[0].$message
                  : ''
              "
              :is-valid="
                v$.user.fecha_ingreso.$dirty
                  ? !v$.user.fecha_ingreso.$invalid
                  : null
              "
            />
          </CCol>
          <CCol sm="4">
            <CInput
              v-model="v$.user.telefono.$model"
              label="Teléfono"
              placeholder="Teléfono"
              :invalid-feedback="
                v$.user.telefono.$error
                  ? v$.user.telefono.$errors[0].$message
                  : ''
              "
              :is-valid="
                v$.user.telefono.$dirty ? !v$.user.telefono.$invalid : null
              "
            />
          </CCol>

          <CCol sm="6">
            <CSelect
              :value.sync="user.id_empresa"
              label="Empresa"
              placeholder="Selecciona la empresa"
              :options="empresa"
              :invalid-feedback="
                v$.user.id_empresa.$error
                  ? v$.user.id_empresa.$errors[0].$message
                  : ''
              "
              :is-valid="
                v$.user.id_empresa.$dirty ? !v$.user.id_empresa.$invalid : null
              "
            />
          </CCol>

          <CCol sm="6">
            <CInput
              v-model="v$.user.email.$model"
              autocomplete="email"
              type="text"
              onkeydown="this.type='email'"
              label="Usuario login"
              placeholder="Usuario login"
              :invalid-feedback="
                v$.user.email.$error ? v$.user.email.$errors[0].$message : ''
              "
              :is-valid="v$.user.email.$dirty ? !v$.user.email.$invalid : null"
            />
          </CCol>
        <!-- correo_personal
        correo_empresarial-->
          <CCol sm="6">
            <CInput
              v-model="v$.user.correo_empresarial.$model"
              autocomplete="Correo Empresarial"
              type="text"
              onkeydown="this.type='email'"
              label="Correo Empresarial"
              placeholder="Correo Empresarial"
              
            />
          </CCol>
          <CCol sm="6">
            <CInput
              
              v-model="v$.user.correo_personal.$model"
              autocomplete="Correo Personal"
              type="text"
              onkeydown="this.type='email'"
              label="Correo Personal"
              placeholder="Correo Personal"
              
            />
          </CCol>

          <CCol sm="6">
            <CSelect
              :value.sync="user.id_departamento"
              label="Departamento"
              placeholder="Departamento"
              :options="departamentos"
              :invalid-feedback="
                v$.user.id_departamento.$error
                  ? v$.user.id_departamento.$errors[0].$message
                  : ''
              "
              :is-valid="
                v$.user.id_departamento.$dirty ? !v$.user.id_departamento.$invalid : null
              "
            />
          </CCol>
          <CCol sm="6">
            <CInput
              v-model="v$.user.puesto.$model"
              label="Puesto"
              placeholder="Puesto"
              :invalid-feedback="
                v$.user.puesto.$error
                  ? v$.user.puesto.$errors[0].$message
                  : ''
              "
              :is-valid="
                v$.user.puesto.$dirty ? !v$.user.puesto.$invalid : null
              "
            />

            
<!-- 
            <CSelect
              :value.sync = "orden.departamentos_Evaluar[0]"
              label="Opciones"
              placeholder="Opcix"
              :options="departamentos"
              :invalid-feedback="
                v$.user.departamentos_Evaluar.$error
                  ? v$.user.departamentos_Evaluar.$errors[0].$message
                  : ''
              "
              :is-valid="
                v$.user.departamentos_Evaluar.$dirty ? !v$.user.departamentos_Evaluar.$invalid : null
              "
            /> -->

            
            
          </CCol>

        <CCardBody>
        <CDataTable
          :items="departamentos"
          :fields="fields3"
          :tableFilter="{
            placeholder: $t('tables.filter.placeholder'),
            label: $t('tables.filter.label') + ':',
            lazy: true,
          }"
          :itemsPerPageSelect="{ label: $t('tables.pageSelect') + ':' }"
          :noItemsView="{
            noResults: $t('tables.itemsView.noResults'),
            noItems: $t('tables.itemsView.noItems'),
          }"
          :items-per-page="30"
          hover
          columnFilter
          sorter
          pagination
          outlined
          size="sm"
          :loading="loading"
        >
          <template #show_checkbox_usuariosEval="{ item, index }">
            <td class="py-2">
              <CInputCheckbox :checked=item.checado :id="'depEval' + index" @click = "changeSelect(index)"  />
            </td>
          </template>
        </CDataTable>
      </CCardBody>

          



          <!-- <CContainer>
            <h3 class="text-center"> Prueba de lista automatizada 4</h3>

            <CCol sm="3" v-for="(item) in departamentos" :key="item.id">
              <CInput
                v-model = item.label
                label = "Nombre de departamento :" + {{item.label}};
              />
                
              <CInputCheckbox id="item.id" :checked = false label="{item.label}"/>

            </CCol>

          </CContainer> -->

          <!-- <CContainer>
            <CCol sm="1">
              <h3 class="text-center"> Prueba de lista automatizada</h3>
            <li v-for="(item,index) in departamentos" :key ="index">
               <CInput
               :value.sync = item.id
               :label = item.label               
               />          
               {{ item.label }}
                          
              
              <CInputCheckbox id="item.id" :checked = false label="{item.label}"/>
            </li>


            </CCol>


           
          </CContainer> -->



          
          <!-- <CContainer>

          
            <CRow >
              <CCol >
                <li v-for="(item) in departamentos" :key = "item.id" >
                                  
                  <CInputCheckbox :label = item.label id="{item.label}" :checked=false @click = "user.departamentos_Evaluar = []"/>
                </li>
              </CCol>             
            </CRow>
          </CContainer> -->




          <!-- {{user.departamentos_Evaluar.length}} -->
         <!-- {depa{departamentos_Evaluar}} -->

        <!-- <CContainer>
          <li v-for="(item) in departamentos" :key = "item.id" >

            
                <CSwitch
                  :checked="setPassword"
                  :label = item.label
                  color="primary"
                  size="sm"
                  autocomplete="off"
                  :disabled="user.id == ''"
                  variant="opposite"
                  v-model="setPassword"
                  @update:checked="selectCheckbox('setPassword', setPassword)"
                />             

          </li>

        </CContainer> -->



          

      
          <CCol sm="4">
            <CInput
              v-model="v$.user.password.$model"
              autocomplete="current-password"
              label="Contraseña"
              placeholder="Contraseña"
              name="password"
              onkeydown="this.type='password'"
              type="text"
              :disabled="!setPassword"
              :invalid-feedback="
                v$.user.password.$error && setPassword
                  ? v$.user.password.$errors[0].$message
                  : ''
              "
              :is-valid="
                v$.user.password.$dirty && setPassword
                  ? !v$.user.password.$invalid
                  : null
              "
            >
              <template #prepend-content>
                <CSwitch
                  :checked="setPassword"
                  color="primary"
                  size="sm"
                  autocomplete="off"
                  :disabled="user.id == ''"
                  variant="opposite"
                  v-model="setPassword"
                  @update:checked="selectCheckbox('setPassword', setPassword)"
                />
              </template>
            </CInput>
          </CCol>
          <CCol sm="3">
            <CInput
              v-model="v$.user.password_confirmate.$model"
              autocomplete="current-password"
              label="Confirmar contraseña"
              type="text"
              onkeydown="this.type='password'"
              placeholder="Confirmar contraseña"
              :disabled="!setPassword"
              :invalid-feedback="
                v$.user.password_confirmate.$error
                  ? v$.user.password_confirmate.$errors[0].$message
                  : ''
              "
              :is-valid="
                v$.user.password_confirmate.$dirty && setPassword
                  ? !v$.user.password_confirmate.$invalid
                  : null
              "
            />
          </CCol>
          <CCol sm="5">
            <CSelect
              :value.sync="user.sucursal_id"
              :plain="true"
              label="Sucursal"
              :options="sucursales"
              placeholder="Selecciona una Sucursal"
              :invalid-feedback="
                v$.user.sucursal_id.$error
                  ? v$.user.sucursal_id.$errors[0].$message
                  : ''
              "
              :is-valid="
                v$.user.sucursal_id.$dirty
                  ? !v$.user.sucursal_id.$invalid
                  : null
              "
            />
          </CCol>
          <CCol sm="7">
            <CSelect
              :value.sync="user.jefe_inmediato"
              label="Jefe Inmediato"
              placeholder="Jefe Inmediato"
              :options="jefeInmediato"
              :invalid-feedback="
                v$.user.jefe_inmediato.$error
                  ? v$.user.jefe_inmediato.$errors[0].$message
                  : ''
              "
              :is-valid="
                v$.user.jefe_inmediato.$dirty
                  ? !v$.user.jefe_inmediato.$invalid
                  : null
              "
            />
          </CCol>
          <CCol sm="5">
            <CSelect
              :value.sync="user.rol_id"
              :plain="true"
              label="Roles"
              :options="roles"
              placeholder="Selecciona un rol"
              @change="user.areas_ventas = []"
              :invalid-feedback="
                v$.user.rol_id.$error ? v$.user.rol_id.$errors[0].$message : ''
              "
              :is-valid="
                v$.user.rol_id.$dirty ? !v$.user.rol_id.$invalid : null
              "
            />
          </CCol>



          
        </CRow>
      </CForm>
      <div slot="footer">
        <CButton @click="baja()" color="danger" variant="outline">
          Dar de BAJA
        </CButton>
        <CButton @click="closeModal()" color="danger" variant="outline">
          Cerrar
        </CButton>
        <CButton @click="update()" v-if="user.id" color="primary">
          Guardar
        </CButton>
        <CButton @click="create()" v-else color="primary"> Guardar </CButton>
      </div>
    </CModal>
  </div>
</template>
<script>
import {
  maxLength,
  email,
  correo_personal,
  correo_empresarial,
  required,
} from "../../utils/validators";
import { sameAs, not } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { requiredIf } from "@vuelidate/validators";
import { cilAddressBook, cilMoodGood, cilPlus } from "@coreui/icons";
import axios from "axios";
import Cards from "../base/Cards.vue";
const fields = [
  { key: "nombre_completo", label: "Nombre completo", _style: "min-width:200px" },
  { key: "puesto", label: "Puesto", _style: "min-width:100px;" },
  { key: "email", label: "Correo", _style: "min-width:100px;" },
  { key: "menuroles", label: "Permisos", _style: "min-width:100px;" },
  { key: "sucursal_desc", label: "Sucursal", _style: "min-width:100px;" },
  /* { key: "comision_porcentaje", label: "Comisión" }, */
  { key: "show_details", label: "", _style: "width:1%", sorter: false, filter: false, },
];

const fields2 = [
  { key: "name", label: "Nombre Completo", _style: "min-width:200px" },
  { key: "email", label: "Email", _style: "min-width:100px;" },
];

const fields3 = [
  {key: "value", label:"Numero de departamento", _style: "min-width:200px"},
  {key: "label", label:"Departamento a Evaluar", _style: "min-width:200px"},
  { key: "show_checkbox_usuariosEval", label: "Habilitar", _style: "width:1%", sorter:false, filter:false, },
];

export default {
    name: "AdvancedTables",
    moodGood: cilMoodGood,
    plusIcon: cilPlus,
    User: {
        id: "",
        name: "",
        correo_personal: "",
        correo_empresarial: "",
        email: "",
        menuroles: "",
        status: "",
        primer_apellido: "",
        segundo_apellido: "",
        no_empleado: "",
        puesto: "",
        fecha_ingreso: "",
        fecha_nacimiento: "",
        telefono: "",
        ext: "",
        estatus: "",
        usuario_id: "",
        sucursal_id: "",
        rol_id: "",
        password: "",
        password_confirmate: "",
        id_departamento: "",
        id_empresa: "",
        jefe_inmediato: "",
        areasventa: [],
        aresas_venta: [],
        //num_departamentos_evaluar:"",
        //departamento_Evaluar:"",
        comision_porcentaje: "",
        comision_monto: "",
    },
    data() {
        return {
          User: {
        id: "",
        name: "",
        correo_personal: "",
        correo_empresarial: "",
        email: "",
        menuroles: "",
        status: "",
        primer_apellido: "",
        segundo_apellido: "",
        no_empleado: "",
        puesto: "",
        fecha_ingreso: "",
        fecha_nacimiento: "",
        telefono: "",
        ext: "",
        estatus: "",
        usuario_id: "",
        sucursal_id: "",
        rol_id: "",
        password: "",
        password_confirmate: "",
        id_departamento: "",
        id_empresa: "",
        jefe_inmediato: "",
        areasventa: [],
        aresas_venta: [],
        //num_departamentos_evaluar:"",
        //departamento_Evaluar:"",
        comision_porcentaje: "",
        comision_monto: "",
    },
            moneda: "",
            estatus: [],
            sucursales: [],
            departamentos: [],
            empresa: [],
            jefeInmediato: [],
            roles: [],
            areasventa: [],
            departamentos_Evaluados:[],
            items: [],
            items2: [],
            idx: 0,
            isTouched: false,
            loading: true,
            user: this.$options.User,
            editModal: false,
            setPassword: true,
            action: this.$t("titles.create"),
            fields,
            fields2,
            fields3,
            details: [],
            collapseDuration: 0,
            modalUsuariosScontestar: false,
            departamentosEvalUsuario:[],
        };
    },
    computed: {
        isInvalid() {
            return (this.isTouched &&
                this.user.areas_ventas.length === 0 &&
                (this.user.rol_id == 7 || this.user.rol_id == 8));
        },
    },
    validations() {
        return {
            user: {
                name: { required, maxLength: maxLength(50), $autoDirty: true },
                email: { required, email, maxLength: maxLength(50), $autoDirty: true },
                correo_empresarial: { email, maxLength: maxLength(50), $autoDirty: true },
                correo_personal: { email, maxLength: maxLength(50), $autoDirty: true },
                primer_apellido: {
                    required,
                    maxLength: maxLength(50),
                    $autoDirty: true,
                },
                segundo_apellido: {
                    maxLength: maxLength(50),
                    $autoDirty: true,
                },
                puesto: {
                    maxLength: maxLength(50),
                    $autoDirty: true,
                },
                no_empleado: { required, $autoDirty: true },
                fecha_ingreso: { required, $autoDirty: true },
                fecha_nacimiento: { required, $autoDirty: true },
                telefono: { required, maxLength: maxLength(15), $autoDirty: true },
                sucursal_id: { required, $autoDirty: true },
                id_departamento: { required, $autoDirty: true },
                id_empresa: { required, $autoDirty: true },
                jefe_inmediato: { required, $autoDirty: true },
                rol_id: { required, $autoDirty: true },
                //departamentos_Evaluar:{required, $autoDirty:true},
                password: {
                    required: requiredIf(() => this.setPassword),
                    $autoDirty: true,
                },
                password_confirmate: {
                    required: requiredIf(() => this.setPassword),
                    sameAs: sameAs(this.user.password),
                    $autoDirty: true,
                },
            },
        };
    },
    setup() {
        return {
            v$: useVuelidate({ $stopPropagation: true }),
        };
    },
    methods: {
        index() {
            let self = this;
            axios
                .get(this.$apiAdress +
                "/api/user?token=" +
                localStorage.getItem("api_token"))
                .then(function (response) {
                console.log(response.data);
               // console.log(departamentos_Evaluar.value);
                self.estatus = response.data.estatus;
                
                self.sucursales = response.data.sucursal;
                self.roles = response.data.roles;
                self.areasventa = response.data.areasventa;
                self.empresa = response.data.empresa;

                //Funcion para evaluar cada elemento

                // departamentos_Evaluar.forEach(element => {
                //   self.element = document.getElementById(element.id).checked;
                //   if (self.element) {
                //     self.element = 1
                //   } else {
                //     self.element = 0
                //   }
                // });  

                
                /* self.items2 = response.data.usuariosSinContestar;
                console.log(self.items2); */
                // console.log(departamentos_Evaluar);

                // self.departamentos_Evaluados = response.data.departamento_Evaluar
                self.items2 = response.data.usuariosSinContestar.map((item) => {
                    return {
                    ...item,
                    name: item.name,
                    email: item.email,
                  };
                });
                var seleccionados = [];
               

     
                                   
                

                self.departamentos = response.data.departamentos;
                self.items = response.data.usuarios;
                self.jefeInmediato = response.data.jefeInmediato;
                self.formatData();
            })
                .catch(function (error) {
                if (error.response.status === 401) {
                    self.$router.push({ path: "/login" });
                }
                else {
                    self.$toast.error(self.$t("messages.error"));
                }
            });
        },
        async save_departamentos_evaluar(x){
          let self = this;
          self.departamento_Evaluar[x] = document.getElementById("saveDepartamentoEv"+index).checked;
          if (self.departamento_Evaluar) {
            self.departamento_Evaluar = 1;
          } else {
            self.departamento_Evaluar = 0;
          }
        },
        getUser($id, idx) {
            let self = this;
            self.idx = idx;
            axios
                .get(this.$apiAdress +
                "/api/user/" +
                $id +
                "?token=" +
                localStorage.getItem("api_token"))
                .then(function (response) {
                console.log(response.data);
                self.action = self.$t("titles.update");
                self.editModal = true;
                self.setPassword = false;
                let user = response.data.user;
                self.user = {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    correo_empresarial: user.correo_empresarial,
                    correo_personal: user.correo_personal,
                    menuroles: user.menuroles,
                    status: user.status,
                    primer_apellido: user.primer_apellido,
                    segundo_apellido: user.segundo_apellido,
                    no_empleado: user.no_empleado,
                    puesto: user.puesto,
                    fecha_ingreso: moment(String(user.fecha_ingreso)).format("YYYY-MM-DD"),
                    fecha_nacimiento: moment(String(user.fecha_nacimiento)).format("YYYY-MM-DD"),
                    telefono: user.telefono,
                    ext: user.ext,
                    estatus: user.estatus,
                    usuario_id: user.usuario_id,
                    sucursal_id: user.sucursal_id,
                    rol_id: user.rol_id,
                    password: "",
                    password_confirmate: "",
                    id_departamento: user.id_departamento,
                    id_empresa: user.id_empresa,
                    jefe_inmediato: user.jefe_inmediato,
                    areasventa: user.areasventa,
                    areas_ventas: user.areas_ventas,
                    comision_porcentaje: user.comision_porcentaje,
                    comision_monto: user.comision_monto,
                    departamentos_Evaluar : user.departamentos_Evaluar
                };
                
                self.departamentosEvalUsuario = response.data.departamentosEvalUsuario;
                self.departamentos = self.departamentos.map((item)=>{
                    var aux = false;
                    self.departamentosEvalUsuario.forEach(element => {
                      if(element.id_Departamento == item.value){
                          aux = !aux;
                          
                      }
                    });
                  return{...item,
                    checado: aux,
                  
                  };
                });
              
                
                self.user.password = "";
                self.user.password_confirmate = "";
                self.user.id = $id;
                self.isTouched = true;
                self.isInvalid;
              
                
            })
                .catch(function (error) {
                if (error.response.status === 401) {
                    self.$router.push({ path: "/login" });
                }
                else {
                    self.$toast.error(self.$t("messages.error"));
                }
            });
        },
        async create() {
            let self = this;

            this.v$.$touch();
            this.isInvalid;
            console.log(self.v$);
            if (this.v$.$error)
                return;
            let isUpdate = await self
                .$swal({
                title: self.$t("¿Esta seguro de agregar este usuario?"),
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
                    "/api/user/create" +
                    "?token=" +
                    localStorage.getItem("api_token"), {
                    name: self.user.name,
                    email: self.user.email,
                    correo_empresarial: self.user.correo_empresarial,
                    correo_personal: self.user.correo_personal,
                    menuroles: self.user.menuroles,
                    status: self.user.status,
                    primer_apellido: self.user.primer_apellido,
                    segundo_apellido: self.user.segundo_apellido,
                    numero_empleado: self.user.no_empleado,
                    puesto: self.user.puesto,
                    fecha_ingreso: self.user.fecha_ingreso,
                    fecha_nacimiento: self.user.fecha_nacimiento,
                    telefono: self.user.telefono,
                    departamentos_Evaluar:self.departamentos,
                    ext: self.user.ext,
                    usuario_id: self.user.usuario_id,
                    sucursal: self.user.sucursal_id,
                    id_departamento: self.user.id_departamento,
                    id_empresa: self.user.id_empresa,
                    jefe_inmediato: self.user.jefe_inmediato,
                    rol: self.user.rol_id,
                    password: self.user.password,
                    password_confirmate: self.user.password_confirmate,
                    areas_ventas: self.user.areas_ventas,
                    comision_porcentaje: self.user.comision_porcentaje,
                    comision_monto: self.user.comision_monto,
                    estatus: 1,
                    
                })
                    .then(function (response) {
                    let data = response.data;
                    self.items.push(data);
                    self.formatData();
                    self.closeModal();
                    self.$toast.success(self.$t("messages.insert"));
                })
                    .catch(function (error) {
                    if (error.response.data.message == "The given data was invalid.") {
                        self.message = "";
                        self.errors = error.response.data.errors;
                        for (let key in error.response.data.errors) {
                            if (error.response.data.errors.hasOwnProperty(key)) {
                                self.message += error.response.data.errors[key][0] + "  ";
                            }
                        }
                        self.$toast.error(self.message);
                    }
                    else if (error.response.status === 401) {
                        self.$router.push({ path: "/login" });
                    }
                    else {
                        self.$toast.error(self.$t("messages.error"));
                    }
                });
            }
        },
       
        async update() {
            let self = this;
            this.v$.$touch();
            
            //console.log(document.getElementById("depEval4").checked)
          console.log("Checalo aqui, baboso");
          console.log(self.departamentos);
           

            
            if (this.v$.$error)
                return;
            let isUpdate = await self
                .$swal({
                title: self.$t("¿Esta seguro de editar este usuario?"),
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
                    "/api/user/update" +
                    "?token=" +
                    localStorage.getItem("api_token"), {
                    numero_empleado: self.user.no_empleado,
                    puesto: self.user.puesto,
                    fecha_ingreso: self.user.fecha_ingreso,
                    fecha_nacimiento: self.user.fecha_nacimiento,
                    id_departamento: self.user.id_departamento,
                    id_empresa: self.user.id_empresa,
                    jefe_inmediato: self.user.jefe_inmediato,
                    id: self.user.id,
                    name: self.user.name,
                    email: self.user.email,
                    correo_empresarial: self.user.correo_empresarial,
                    correo_personal: self.user.correo_personal,
                    menuroles: self.user.menuroles,
                    status: self.user.status,
                    primer_apellido: self.user.primer_apellido,
                    segundo_apellido: self.user.segundo_apellido,
                    departamentos_Evaluar: self.departamentos,
                    telefono: self.user.telefono,
                    ext: self.user.ext,
                    usuario_id: self.user.usuario_id,
                    sucursal: self.user.sucursal_id,
                    rol: self.user.rol_id,
                    password: self.user.password,
                    password_confirmate: self.user.password_confirmate,
                    areas_ventas: self.user.areas_ventas,
                    comision_porcentaje: self.user.comision_porcentaje,
                    comision_monto: self.user.comision_monto,
                    estatus: "1",
                })
                    .then(function (response) {
                    let data = response.data;
                    self.items[self.idx] = data;
                    self.formatData();
                    self.closeModal();
                    self.$toast.success(self.$t("messages.update"));
                })
                    .catch(function (error) {
                    if (error.response && error.response.data.message == "The given data was invalid.") {
                        self.message = "";
                        for (let key in error.response.data.errors) {
                            if (error.response.data.errors.hasOwnProperty(key)) {
                                self.message += error.response.data.errors[key][0] + "  ";
                            }
                        }
                        self.$toast.error(self.message);
                    }
                    else if (error.response.status === 401) {
                        self.$router.push({ path: "/login" });
                    }
                    else {
                        self.$toast.error(self.$t("messages.error"));
                    }
                });
            }
        },        
        async baja() {
            let self = this;
            this.v$.$touch();
            if (this.v$.$error)
                return;
            let isUpdate = await self
                .$swal({
                title: self.$t("¿Esta seguro que deseas dar de BAJA este usuario?"),
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
                    "/api/user/update" +
                    "?token=" +
                    localStorage.getItem("api_token"), {
                    numero_empleado: self.user.no_empleado,
                    puesto: self.user.puesto,
                    fecha_ingreso: self.user.fecha_ingreso,
                    fecha_nacimiento: self.user.fecha_nacimiento,
                    id_departamento: self.user.id_departamento,
                    id_empresa: self.user.id_empresa,
                    jefe_inmediato: self.user.id,
                    id: self.user.id,
                    name: self.user.name,
                    email: self.user.id + "_" +self.user.no_empleado + "@grupowattsolar.com",
                    correo_empresarial: self.correo_empresarial,
                    correo_personal: self.correo_personal,
                    menuroles: self.user.menuroles,
                    status: self.user.status,
                    primer_apellido: self.user.primer_apellido,
                    segundo_apellido: self.user.segundo_apellido,
                    departamentos_Evaluar: self.user.departamentos_Evaluar,
                    telefono: "614" + self.user.id + "0000",
                    ext: self.user.ext,
                    usuario_id: self.user.usuario_id,
                    sucursal: self.user.sucursal_id,
                    rol: self.user.rol_id,
                    password: self.user.password,
                    password_confirmate: self.user.password_confirmate,
                    areas_ventas: self.user.areas_ventas,
                    comision_porcentaje: self.user.comision_porcentaje,
                    comision_monto: self.user.comision_monto,
                    estatus: "0",
                })
                    .then(function (response) {
                    
                    let data = response.data;
                    self.items[self.idx] = data;
                    self.formatData();
                    self.closeModal();
                    self.$toast.success(self.$t("messages.update"));
                })
                    .catch(function (error) {
                    if (error.response && error.response.data.message == "The given data was invalid.") {
                        self.message = "";
                        for (let key in error.response.data.errors) {
                            if (error.response.data.errors.hasOwnProperty(key)) {
                                self.message += error.response.data.errors[key][0] + "  ";
                            }
                        }
                        self.$toast.error(self.message);
                    }
                    else if (error.response.status === 401) {
                        self.$router.push({ path: "/login" });
                    }
                    else {
                        self.$toast.error(self.$t("messages.error"));
                    }
                });
            }
        },
        async formatData() {
            let formatItems = await this.items.map((item) => {
                return {
                    ...item,
                    nombre_completo: item.name +
                        " " +
                        item.primer_apellido +
                        " " +
                        (item.segundo_apellido || ""),
                    rol_desc: item.rol ? item.rol.text : "",
                    sucursal_desc: item.sucursal ? item.sucursal.name : "",
                };
            });
            this.items = formatItems;
            this.loading = false;
        },
        selectCheckbox(slug, code) {
            switch (slug) {
                case "setPassword":
                    this.setPassword = !code;
                    break;
            }
        },
        changeSelect(posicion){
          //this.departamentos
          this.departamentos[posicion].checado=document.getElementById("depEval"+posicion).checked ;
        }
        ,
        onChange(value) {
            this.user.areas_ventas = value;
            if (!value)
                this.user.areas_ventas = [];
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
                let formatted = value.unmasked.replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, "$1,");
                value.masked = `\$${formatted}`;
                return true;
            }
        },
    },
    mounted: function () {
        this.index();
    },
    components: { Cards }
};
</script>