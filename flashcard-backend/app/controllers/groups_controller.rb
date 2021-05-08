class GroupsController < ApplicationController
  def index 
    render json: Group.all
  end

  def show
    group = Group.find_by_id(params[:id])
    render json: group
  end 
end
