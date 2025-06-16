<template>
  <div class="container mt-5">
    <h2>Formulário de Admissão</h2>
    <form>
      <div class="mb-3">
        <label for="nome" class="form-label">Nome</label>
        <input
          type="text"
          class="form-control"
          id="nome"
          placeholder="Digite o nome completo"
          required
        />
      </div>
      <div class="mb-3">
        <label for="cpf" class="form-label">CPF</label>
        <input type="text" class="form-control" id="cpf" placeholder="Digite o CPF" required />
      </div>
      <div class="mb-3">
        <label for="dataNascimento" class="form-label">Data de Nascimento</label>
        <input type="date" class="form-control" id="dataNascimento" required />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" placeholder="Digite o email" required />
      </div>
      <div class="mb-3">
        <label for="telefone" class="form-label">Telefone</label>
        <input
          type="tel"
          class="form-control"
          id="telefone"
          placeholder="Digite o telefone"
          required
        />
      </div>
      <div class="mb-3">
        <label for="endereco" class="form-label">Endereço</label>
        <input
          type="text"
          class="form-control"
          id="endereco"
          placeholder="Digite o endereço"
          required
        />
      </div>
      <div class="mb-3">
        <label for="cidade" class="form-label">Cidade</label>
        <input
          type="text"
          class="form-control"
          id="cidade"
          placeholder="Digite a cidade"
          required
        />
      </div>
      <div class="mb-3">
        <label for="estado" class="form-label">Estado</label>
        <input
          type="text"
          class="form-control"
          id="estado"
          placeholder="Digite o estado"
          required
        />
      </div>
      <div class="mb-3">
        <label for="cep" class="form-label">CEP</label>
        <input type="text" class="form-control" id="cep" placeholder="Digite o CEP" required />
      </div>
      <div class="mb-3">
        <label for="cargo" class="form-label">Cargo</label>
        <input type="text" class="form-control" id="cargo" placeholder="Digite o cargo" required />
      </div>
      <div class="mb-3">
        <label for="salario" class="form-label">Salário</label>
        <input
          type="number"
          class="form-control"
          id="salario"
          placeholder="Digite o salário"
          required
        />
      </div>
      <div class="mb-3">
        <label for="dataAdmissao" class="form-label">Data de Admissão</label>
        <input type="date" class="form-control" id="dataAdmissao" required />
      </div>
      <div class="mb-3">
        <label for="departamento" class="form-label">Departamento</label>
        <input
          type="text"
          class="form-control"
          id="departamento"
          placeholder="Digite o departamento"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  name: "AdmissionalForm",
};
</script>

<style>
/* Adicione estilos personalizados aqui, se necessário */
</style>
