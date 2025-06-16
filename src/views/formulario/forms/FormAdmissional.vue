<template>
  <div class="container mt-5">
    <h2>Formulário de Admissão</h2>
    <BTabs content-class="mt-3">
      <BTab
        title="Informações Pessoais"
        class="container-fluid p-3 bg-body-tertiary rounded"
        active
      >
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
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Digite o email"
              required
            />
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
          <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
      </BTab>
      <BTab title="Arquivos"> </BTab>
    </BTabs>
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
