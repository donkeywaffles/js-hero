class Api::V1::ScoresController < ApplicationController

  def create
    @score = Score.new(score_params)
    if @score.save
      render json: @score
    else
      render json: @score.errors, status: :unprocessable_entity
    end
  end

  private
  def score_params
      params.require(:score).permit(:name, :value, :song_id)
  end
end
