class PreparedsController < ApplicationController
  before_action :set_prepared, only: [:show, :edit, :update, :destroy]

  # GET /prepareds
  # GET /prepareds.json
  def index
    @prepareds = Prepared.all
  end

  # GET /prepareds/1
  # GET /prepareds/1.json
  def show
  end

  # GET /prepareds/new
  def new
    @prepared = Prepared.new
  end

  # GET /prepareds/1/edit
  def edit
  end

  # POST /prepareds
  # POST /prepareds.json
  def create
    @prepared = Prepared.new(prepared_params)

    respond_to do |format|
      if @prepared.save
        format.html { redirect_to @prepared, notice: 'Prepared was successfully created.' }
        format.json { render :show, status: :created, location: @prepared }
      else
        format.html { render :new }
        format.json { render json: @prepared.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /prepareds/1
  # PATCH/PUT /prepareds/1.json
  def update
    respond_to do |format|
      if @prepared.update(prepared_params)
        format.html { redirect_to @prepared, notice: 'Prepared was successfully updated.' }
        format.json { render :show, status: :ok, location: @prepared }
      else
        format.html { render :edit }
        format.json { render json: @prepared.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /prepareds/1
  # DELETE /prepareds/1.json
  def destroy
    @prepared.destroy
    respond_to do |format|
      format.html { redirect_to prepareds_url, notice: 'Prepared was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_prepared
      @prepared = Prepared.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def prepared_params
      params.require(:prepared).permit(:image, :title, :description, :button)
    end
end
