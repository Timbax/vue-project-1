<template>
  <div>
    <h2>Formulario de registro</h2>
    <Form :validation-schema="schema" @submit="onSubmit">
      <div class="form">
        <label for="nombre">Nombre:</label>
        <Field type="text" name="nombre" id="nombre" placeholder="nombre" />
        <ErrorMessage name="nombre"></ErrorMessage>
      </div>
      <div class="form">
        <label for="email">e-mail:</label>
        <Field type="email" name="email" id="email" placeholder="e-mail" />
        <ErrorMessage name="email"></ErrorMessage>
      </div>
      <div class="form">
        <button type="submit">Registrar</button>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import { schema } from "../schemas/validationSchema";

const onSubmit = () => {
  console.log("Se ha enviado el formulario");
};
</script>
<style scope>
.form {
  margin-bottom: 10px;
}
</style>
