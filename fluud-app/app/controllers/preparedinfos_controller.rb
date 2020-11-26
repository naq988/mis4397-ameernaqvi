class PreparedinfosController < ApplicationController
  before_action :set_preparedinfo, only: [:show, :edit, :update, :destroy]

  # GET /preparedinfos
  # GET /preparedinfos.json
  def index
    @preparedinfos = Preparedinfo.all
  end

  # GET /preparedinfos/1
  # GET /preparedinfos/1.json
  def show
  end

  # GET /preparedinfos/new
  def new
    @preparedinfo = Preparedinfo.new
  end

  # GET /preparedinfos/1/edit
  def edit
  end

  # POST /preparedinfos
  # POST /preparedinfos.json
  def create
    @preparedinfo = Preparedinfo.new(preparedinfo_params)

    respond_to do |format|
      if @preparedinfo.save
        format.html { redirect_to @preparedinfo, notice: 'Preparedinfo was successfully created.' }
        format.json { render :show, status: :created, location: @preparedinfo }
      else
        format.html { render :new }
        format.json { render json: @preparedinfo.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /preparedinfos/1
  # PATCH/PUT /preparedinfos/1.json
  def update
    respond_to do |format|
      if @preparedinfo.update(preparedinfo_params)
        format.html { redirect_to @preparedinfo, notice: 'Preparedinfo was successfully updated.' }
        format.json { render :show, status: :ok, location: @preparedinfo }
      else
        format.html { render :edit }
        format.json { render json: @preparedinfo.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /preparedinfos/1
  # DELETE /preparedinfos/1.json
  def destroy
    @preparedinfo.destroy
    respond_to do |format|
      format.html { redirect_to preparedinfos_url, notice: 'Preparedinfo was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_preparedinfo
      @preparedinfo = Preparedinfo.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def preparedinfo_params
      params.fetch(:preparedinfo, {})
    end
end
